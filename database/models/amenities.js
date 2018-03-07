const mongoose = require('mongoose');
const { Schema } = mongoose;
const Promise = require('bluebird');

let amenitiesSchema = mongoose.Schema({
  id: {
    type: Number,
    unique:true,
  },
  user: {
    name: String,
    thumbnail: String,
    link: String,
  },
  shipDetails: {
    name: String,
    dock: String,
    capacity: Number,
    boatRules: [String],
    heads: Number,
    description: String,
    bedrooms: {
      capacity: Number,
      sleepingArrangement: [Number],
    },
    amenities: {
      priority: {
        anchor: Boolean,
        engine: Boolean,
        lifeJacket: Boolean,
        twoWayRadio: Boolean,
        soundSystem: Boolean,
        tv: Boolean,
        kitchen: Boolean,
        ac: Boolean,
        heating: Boolean,
      },
      optional: {
        inflatables: Boolean,
        fishingGear: Boolean,
        scubaGear: Boolean,
        harpoons: Boolean,
        sharkCage: Boolean,
        medication: Boolean,
        wifi: Boolean,
        pool: Boolean,
      },
    }
  },
});

let Amenities = mongoose.model('Amenities', amenitiesSchema);


function insertData(amenities) {
  return Amenities.insertMany(amenities);
}

function getAllAmenities() {
  return Amenities.find();
}

function getAmenityById(id) {
  return Amenities.findOne({ id });
}

module.exports = {
  insertData,
  getAmenityById,
  getAllAmenities,
};
