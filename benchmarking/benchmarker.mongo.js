/* eslint-disable no-await-in-loop */
const { MongoClient } = require('mongodb');
const dateMath = require('date-arithmetic');
const ProgressBar = require('ascii-progress');

const url = process.env.url || 'mongodb://localhost:27017';
const dbName = process.env.dbname || 'descriptions';
const startId = process.env.startId || 0;
const endId = process.env.endId || 10000000;
const idCount = process.env.idCount || 5000;

let average = array => (array.reduce((acc, val) => acc + val)) / array.length;

let runBenchmark = async () => {
  const client = await MongoClient.connect(`${url}/${dbName}`);
  const db = client.db(dbName);
  const collection = db.collection(dbName);

  let startTime = new Date();
  console.log('/* -----------------------');
  console.log('| Starting benchmark.');
  console.log('| Testing: MongoDB, stringified with id as index '); // Change this for different configurations
  console.log(`| ${idCount} ids from ${startId} to ${endId}`);
  console.log(`| Start time: ${startTime}`);
  console.log('+ ------------------------');

  let progressBar = new ProgressBar({
    schema: `| [:bar] :percent (:i/${idCount} reads)\n| Found id :foundId in :readTime seconds`,
    total: idCount
  });

  let readTimes = [];

  let increment = Math.round((endId - startId) / idCount);
  let randId = i => Math.floor((Math.random() * (increment)) + i);

  for (let i = startId; i < endId; i += increment) {
    let readStartTime = new Date();
    let id = randId(i);
    await collection.findOne({ id });
    let readTime = dateMath.diff(readStartTime, new Date(), 'seconds', true);
    readTimes.push(readTime);
    progressBar.tick({ i: readTimes.length, foundId: id, readTime });
  }

  let endTime = new Date();
  console.log('+ -----------------------');
  console.log('| Completed benchmark.');
  console.log(`| Start time: ${startTime}`);
  console.log('| End time: ', endTime);
  console.log(`| Elapsed time: ${dateMath.diff(startTime, endTime, 'seconds', true)} seconds`);
  console.log(`| Average read time: ${average(readTimes)} seconds`);
  console.log('\\* ----------------\\rm/--');
  client.close();
  process.exit();
};

runBenchmark();
