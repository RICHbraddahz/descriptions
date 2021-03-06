require('newrelic');
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const redis = require('redis');
const bluebird = require('bluebird');
const getRenderedComponent = require('./renderComponent');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
const redisClient = redis.createClient();
const app = express();
const port = 3001;

redisClient.on('error', (err) => {
  console.log('Redis Error: ', err);
});

MongoClient.connect('mongodb://localhost/descriptions_n')
  .then((mongoClient) => {
    app.use(cors());

    app.get('/:id', async (req, res) => {
      const { id } = req.params;
      let html = getRenderedComponent(id, mongoClient, redisClient);

      res.send(html);
    });

    // app.get('/descriptions/:id', async (req, res) => {
    //   const { id } = req.params;
    //   let data = await getData(id, mongoClient, redisClient);
    //   res.json(data);
    // });

    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
