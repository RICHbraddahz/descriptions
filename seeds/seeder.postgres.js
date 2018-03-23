/* eslint-disable no-await-in-loop */
const dateMath = require('date-arithmetic');
const promise = require('bluebird');
const pgp = require('pg-promise')({
  promiseLib: promise
});
const cluster = require('cluster');
const cpus = require('os').cpus();
const { makeDescriptionBatch } = require('./seedFunctions.postgres');
const { printStart, printFinish, makeBars } = require('./seedLogging');


let numCPUs = (process.env.numCPUs) ? parseInt(process.env.numCPUs, 10) : cpus.length;
let startingValue = process.env.startingValue ? parseInt(process.env.startingValue, 10) : 0;
let seedCount = (process.env.seedCount ? parseInt(process.env.seedCount, 10) : 10000000) / numCPUs;
let batchSize = process.env.batchSize ? parseInt(process.env.batchSize, 10) : 1000;
let printEvery = process.env.printEvery ? parseInt(process.env.printEvery, 10) : 10000;

const url = process.env.url || 'postgres://localhost:5432';
const dbName = process.env.dbname || 'descriptions_f';

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

let startTime = new Date();
let bars = [];

if (cluster.isMaster) {
  printStart(url, dbName, startTime, seedCount);
  bars = makeBars(numCPUs, seedCount, printEvery);

  workers.forEach((worker) => {
    worker.on('message', (msg) => {
      let [barId, inserted, ips, finished] = msg.split(',');
      bars[barId].tick({ inserted, ips });

      if (JSON.parse(finished)) {
        finishedProcesses += 1;
        if (finishedProcesses === numCPUs) {
          printFinish(url, dbName, startTime);
          process.exit();
        }
      }
    });
  });
}

let tick = (cluster.isMaster) ? (inserted, ips) => {
  bars[0].tick({
    inserted,
    ips
  });
} : (inserted, insertsPerSec, finished) => {
  process.send(`${process.env.barId},${inserted},${insertsPerSec},${finished}`);
};

const db = pgp(`${url}/${dbName}`);

let fields = [
  ['id', 'INTEGER'],
  ['author', 'TEXT'], // user is a reserved word in postgres
  // ['shipdetails', 'TEXT']
  ['name', 'CHAR(32)'],
  ['dock', 'CHAR(64)'],
  ['capacity', 'INTEGER'],
  ['boatrules', 'TEXT'],
  ['heads', 'INTEGER'],
  ['description', 'CHAR(256)'],
  ['bedrooms', 'TEXT'],
  ['amenities', 'TEXT']
];

let makeTable = () => db.none(`
  CREATE TABLE IF NOT EXISTS ${dbName}
  (
    ${fields.map(field => `${field[0]} ${field[1]}`).join(', ')}
  )`);

let seedDescriptionBatch = async (startingVal, bSize) => {
  // do stuff
  let descriptions = makeDescriptionBatch(startingVal, bSize);
  await db.none(pgp.helpers.insert(descriptions, fields.map(field => `${field[0]}`), dbName));
};

let seedDatabase = async () => {
  await makeTable();

  for (let j = 0; j < seedCount / printEvery; j += 1) {
    for (let i = 0; i < printEvery / batchSize; i += 1) {
      await seedDescriptionBatch(
        (startingValue + (i * batchSize) + ((j * printEvery))),
        batchSize
      );
    }
    let inserted = (j + 1) * printEvery;
    let timeDifference = dateMath.diff(startTime, new Date(), 'seconds', true);
    let insertsPerSec = Math.floor(inserted / timeDifference);
    tick(inserted, insertsPerSec, inserted >= seedCount);
  }
};

seedDatabase()
  .then(() => {
    if (cluster.isMaster) {
      finishedProcesses += 1;
      if (finishedProcesses === numCPUs) {
        printFinish(url, dbName, startTime);
        process.exit();
      }
    }
  })
  .catch((e) => {
    console.log(e);
    process.exit();
  });
