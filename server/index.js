require('newrelic');
const express = require('express');
const { MongoClient } = require('mongodb');
const { getDescriptionById } = require('../database/models/descriptionModel.mongo');
const cors = require('cors');

const app = express();
const port = 3001;


MongoClient.connect('mongodb://localhost/descriptions_n')
  .then((client) => {
    app.use(cors());
    app.use('/descriptions/:id', express.static(`${__dirname}/../client/dist`));
    app.use(express.static(`${__dirname}/../client/dist`));

    app.get('/amenities/:id/amenities/', (req, res) => {
      const { id } = req.params;

      console.log('ahhh');
      const db = client.db('descriptions_n');
      const collection = db.collection('descriptions_n');

      getDescriptionById(collection, id)
        .then(result => res.json(result))
        .catch(e => console.log(e));
    });

    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
