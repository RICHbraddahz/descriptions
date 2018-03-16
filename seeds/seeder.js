const dateMath = require('date-arithmetic');
const { MongoClient } = require('mongodb');
const cluster = require('cluster');
const cpus = require('os').cpus();
const { insertAllDescriptions } = require('./seedFunctions');

let numCPUs = process.env.numCPUs || cpus.length;
let startingValue = process.env.startingValue || 0;
let seedCount = (process.env.seedCount || 10000000) / numCPUs;
let batchSize = process.env.batchSize || 1000;
let printEvery = process.env.printEvery || 10000;

if (cluster.isMaster) {
  for (let i = 0; i < (numCPUs - 1); i += 1) {
    cluster.fork({ startingValue: Math.round((i + 1) * (10000000 / numCPUs)) });
  }

  cluster.on('exit', (worker) => {
    console.log(`worker ${worker.process.pid} died`);
  });
}
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'descriptions';

// Use connect method to connect to the server
MongoClient.connect(`${url}/${dbName}`)
  .then((client) => {
    let startTime = new Date();

    if (cluster.isMaster) {
      console.log('/* -----------------------');
      console.log('| Starting seed.');
      console.log(`| Start time: ${startTime}`);
      console.log('+ ------------------------');
    }

    const db = client.db('descriptions');
    const collection = db.collection('descriptions');
    let label = cluster.isMaster ? 'M  ' : `W${cluster.worker.id} `;

    insertAllDescriptions(
      client, collection,
      startingValue, seedCount, batchSize,
      printEvery, startTime, label
    )
      .then(() => {
        if (cluster.isMaster) {
          let endTime = new Date();
          console.log('+ -----------------------');
          console.log('| Completed seed.');
          console.log(`| Start time: ${startTime}`);
          console.log(`| End time: ${endTime}`);
          console.log(`| Elapsed time: ${dateMath.diff(startTime, endTime, 'seconds', true)} seconds`);
          console.log('\\* -----------------------');
        }
        client.close();
        process.exit();
      });
  })
  .catch((e) => {
    console.error(e);
  });
