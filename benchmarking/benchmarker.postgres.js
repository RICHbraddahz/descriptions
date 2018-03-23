/* eslint-disable no-await-in-loop */
const promise = require('bluebird');
const pgp = require('pg-promise')({
  promiseLib: promise
});

const dateMath = require('date-arithmetic');

const url = process.env.url || 'postgres://localhost:5432';
const dbName = process.env.dbname || 'descriptions_s';
const startId = process.env.startId || 0;
const endId = process.env.endId || 10000000;
const idCount = process.env.idCount || 5000;
const ProgressBar = require('ascii-progress');

let average = array => (array.reduce((acc, val) => acc + val)) / array.length;

let runBenchmark = async () => {
  const db = pgp(`${url}/${dbName}`);
  const tableName = dbName;

  let startTime = new Date();
  console.log('/* -----------------------');
  console.log('| Starting benchmark.');
  console.log('| Testing: Postgres, stringified with id as index ');
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

  for (let i = startId; i < endId; i += Math.round((endId - startId) / idCount)) {
    let id = randId(i);
    let readStartTime = new Date();
    try {
      let data = await db.any(`SELECT * FROM ${tableName} WHERE id=${id}`, [true]);
      let item = data[0];
      JSON.parse(item.author);
      JSON.parse(item.shipdetails);
      let readTime = dateMath.diff(readStartTime, new Date(), 'seconds', true);
      readTimes.push(readTime);
      progressBar.tick({ i: readTimes.length, foundId: id, readTime });
    } catch (e) {
      console.log(`Error finding where id=${id}`, e);
    }
  }

  let endTime = new Date();
  console.log('+ -----------------------');
  console.log('| Completed benchmark.');
  console.log(`| Start time: ${startTime}`);
  console.log('| End time: ', endTime);
  console.log(`| Elapsed time: ${dateMath.diff(startTime, endTime, 'seconds', true)} seconds`);
  console.log(`| Average read time: ${average(readTimes)} seconds`);
  console.log('\\* ----------------\\rm/--');
  process.exit();
};

runBenchmark();
