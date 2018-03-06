const mongoose = require('mongoose');
const Amenities = require('./models/amenities');
const data = require('./mockData');
//mongod --port 27018

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
