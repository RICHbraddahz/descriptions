const dateMath = require('date-arithmetic');
const ProgressBar = require('ascii-progress');
const { MongoClient } = require('mongodb');
const cluster = require('cluster');
const { range } = require('lodash');
const cpus = require('os').cpus();
const { insertAllDescriptions } = require('./seedFunctions');

let numCPUs = process.env.numCPUs || cpus.length;
let startingValue = process.env.startingValue || 0;
let seedCount = (process.env.seedCount || 10000000) / numCPUs;
let batchSize = process.env.batchSize || 1000;
let printEvery = process.env.printEvery || 10000;

const workers = [];
if (cluster.isMaster) {
  for (let i = 0; i < (numCPUs - 1); i += 1) {
    workers.push(cluster.fork({
      startingValue: Math.round((i + 1) * (10000000 / numCPUs)),
      barId: i + 1
    }));
  }
}
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'descriptions';

// Use connect method to connect to the server
MongoClient.connect(`${url}/${dbName}`)
  .then((client) => {
    let startTime = new Date();

    let bars = [];

    if (cluster.isMaster) {
      console.log('/* -----------------------');
      console.log('| Starting seed.');
      console.log(`| Start time: ${startTime}`);
      console.log('+ ------------------------');

      bars = range(numCPUs).map(id => new ProgressBar({
        schema: `| ${id} [:bar] :percent :inserted inserted (:ips inserts/sec)`,
        total: seedCount / printEvery
      }));

      workers.forEach((worker) => {
        worker.on('message', (msg) => {
          let params = msg.split(',');
          bars[params[0]].tick({
            inserted: params[1],
            ips: params[2]
          });
        });
      });
    }

    let tickFn = (cluster.isMaster) ? (inserted, ips) => {
      bars[0].tick({
        inserted,
        ips
      });
    } : (inserted, insertsPerSec) => {
      process.send(`${process.env.barId},${inserted},${insertsPerSec}`);
    };

    const db = client.db('descriptions');
    const collection = db.collection('descriptions');

    insertAllDescriptions(
      client, collection,
      startingValue, seedCount, batchSize,
      printEvery, startTime, tickFn
    )
      .then(() => {
        if (cluster.isMaster) {
          bars.forEach(bar => bar.update(100));
          let endTime = new Date();
          console.log('+ -----------------------');
          console.log('| Completed seed.');
          console.log(`| Start time: ${startTime}`);
          console.log(`| End time: ${endTime}`);
          console.log(`| Elapsed time: ${dateMath.diff(startTime, endTime, 'seconds', true)} seconds`);
          console.log('\\* ----------------\\rm/--');
        }
        client.close();
        process.exit();
      });
  })
  .catch((e) => {
    console.error(e);
  });
