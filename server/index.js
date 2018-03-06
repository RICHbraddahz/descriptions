const express = require('express');
let db = require('../database/');
const mongoose = require('mongoose');
const amenities = require ('../database/models/amenities');

const app = express();
const port = 1129;

app.use(express.static(__dirname + '/../client'));


mongoose.connect('mongodb://localhost/amenities');

app.get('/amenities/:id', (req, res) => {
  console.log('Serving GET request on url /amenities');
  const { id } = req.params;
  amenities.getProductById(id)
    .then(result => res.json(result));
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
