const dateMath = require('date-arithmetic');
const ProgressBar = require('ascii-progress');
const { MongoClient } = require('mongodb');
const cluster = require('cluster');
const { range } = require('lodash');
const cpus = require('os').cpus();
const { insertAllDescriptions } = require('./seedFunctions');

let numCPUs = (process.env.numCPUs) ? parseInt(process.env.numCPUs, 10) : cpus.length;
let startingValue = process.env.startingValue || 0;
let seedCount = (process.env.seedCount || 10000000) / numCPUs;
let batchSize = process.env.batchSize || 1000;
let printEvery = process.env.printEvery || 10000;

const workers = [];
let finishedProcesses = 0;
if (cluster.isMaster) {
  for (let i = 0; i < (numCPUs - 1); i += 1) {
    workers.push(cluster.fork({
      startingValue: Math.round((i + 1) * (10000000 / numCPUs)),
      barId: i + 1
    }));
  }

  cluster.on('exit', () => {});
}

let printFinish = (client, url, dbName, startTime) => {
  let endTime = new Date();
  console.log('+ -----------------------');
  console.log('| Completed seed.');
  console.log(`| Inserted ${seedCount} items to ${url}/${dbName}`);
  console.log(`| Start time: ${startTime}`);
  console.log(`| End time: ${endTime}`);
  console.log(`| Elapsed time: ${dateMath.diff(startTime, endTime, 'seconds', true)} seconds`);
  console.log('\\* ----------------\\rm/--');

  client.close();
  process.exit();
};

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
          let [barId, inserted, ips, finished] = msg.split(',');
          bars[barId].tick({ inserted, ips });

          if (JSON.parse(finished)) {
            finishedProcesses += 1;
            if (finishedProcesses === numCPUs) {
              printFinish(client, url, dbName, startTime);
            }
          }
        });
      });
    }

    let tickFn = (cluster.isMaster) ? (inserted, ips) => {
      bars[0].tick({
        inserted,
        ips
      });
    } : (inserted, insertsPerSec, finished) => {
      process.send(`${process.env.barId},${inserted},${insertsPerSec},${finished}`);
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
          finishedProcesses += 1;
          if (finishedProcesses === numCPUs) {
            printFinish(client, url, dbName, startTime);
          }
        }
      });
  })
  .catch((e) => {
    console.error(e);
  });
