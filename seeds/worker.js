const mongoose = require('mongoose');
const Amenities = require('../database/models/amenities');
const data = require('./mockData');

mongoose.connect('mongodb://localhost/amenities');

Amenities.insertData(data)
  .then(() => {
    console.log('Insert Data Success!');
    mongoose.disconnect();
  })
  .catch((e) => {
    console.error(e);
    mongoose.disconnect();
  });
