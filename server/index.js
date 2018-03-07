const express = require('express');
const db = require('../database/');
const mongoose = require('mongoose');
const Amenities = require ('../database/models/amenities');

const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost/amenities');

app.use(express.static(__dirname + '/../client'));

app.get('/amenities/:id', (req, res) => {
  console.log('Serving GET request on url /amenities');
  const { id } = req.params;
  Amenities.getAmenityById(id)
    .then(result => res.json(result));
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
