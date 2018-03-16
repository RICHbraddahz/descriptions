const dateMath = require('date-arithmetic');
const { MongoClient } = require('mongodb');
const { insert10MDescriptions } = require('./seedFunctions');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'descriptions';

// Use connect method to connect to the server
console.log(`${url}/${dbName}`);
MongoClient.connect(`${url}/${dbName}`)
  .then((client) => {
    const db = client.db('descriptions');
    const collection = db.collection('descriptions');

    let startTime = new Date();
    console.log('/* -----------------------');
    console.log('| Starting seed.');
    console.log(`| Start time: ${startTime}`);
    console.log('+ ------------------------');

    let batchSize = 1000;
    let printEvery = 10000;

    insert10MDescriptions(client, collection, batchSize, printEvery, startTime)
      .then(() => {
        let endTime = new Date();
        console.log('+ -----------------------');
        console.log('| Completed seed.');
        console.log(`| Start time: ${startTime}`);
        console.log(`| End time: ${endTime}`);
        console.log(`| Elapsed time: ${dateMath.diff(startTime, endTime, 'seconds', true)} seconds`);
        console.log('\\* -----------------------');
        client.close();
      });
  })
  .catch((e) => {
    console.error(e);
  });
