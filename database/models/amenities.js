const mongoose = require('mongoose');
const { Schema } = mongoose;
//mongod --port 27018

let amenitiesSchema = mongoose.Schema({
  id: Number,
  user: {
    name: String,
    thumbnail: String,
    link: String,
  },
  shipDetails: {
    name: String,
    dock: String,
    capacity: Number,
    boatRules: Array,
    heads: Number,
    description: String,
    bedrooms: {
      capacity: Number,
      sleepingArrangement: Array,
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

function getAllProducts() {
  return Amenities.find();
}

function getProductById(id) {
  return Amenities.findOne({ id });
}

module.exports = {
  insertData,
  getProductById,
  getAllProducts,
};

// const save = (amenitiy, callback) => {
//   const newAmenity = new Amenities({
//     id: amenitiy.id,
//     user: {
//       name: amenitiy.user.name,
//       thumbnail: amenitiy.user.thumbnail,
//       link: amenitiy.user.link,
//     },
//     shipDetails: {
//       capacity: amenitiy.shipDetails.capacity,
//       boatRules: amenitiy.shipDetails.boat_rules,
//       heads: amenitiy.shipDetails.heads,
//       description: amenitiy.shipDetails.description,
//       bedrooms: {
//         bedrooms: amenitiy.shipDetails.bedrooms.bedrooms,
//         sleepingArangement: amenitiy.shipDetails.bedrooms.sleeping_arangement,
//       },
//       amenities: {
//         priority: {
//           anchor: amenitiy.shipDetails.amenities.priority.anchor,
//           engine: amenitiy.shipDetails.amenities.priority.engine,
//           lifeJacket: amenitiy.shipDetails.amenities.priority.lifeJacket,
//           twoWayRadio: amenitiy.shipDetails.amenities.priority.twoWayRadio,
//           soundSystem: amenitiy.shipDetails.amenities.priority.soundSystem,
//           tv: amenitiy.shipDetails.amenities.priority.tv,
//           kitchen: amenitiy.shipDetails.amenities.priority.kitchen,
//           ac: amenitiy.shipDetails.amenities.priority.ac,
//           heating: amenitiy.shipDetails.amenities.priority.heating,
//         },
//         optional: {
//           inflatables: amenitiy.shipDetails.amenities.optional.inflatables,
//           fishingGear: amenitiy.shipDetails.amenities.optional.fishingGear,
//           scubaGear: amenitiy.shipDetails.amenities.optional.scubaGear,
//           harpoons: amenitiy.shipDetails.amenities.optional.harpoons,
//           sharkCage: amenitiy.shipDetails.amenities.optional.sharkCage,
//           medication: amenitiy.shipDetails.amenities.optional.medication,
//           wifi: amenitiy.shipDetails.amenities.optional.wifi,
//           pool: amenitiy.shipDetails.amenities.optional.pool,
//         },
//       }
//     },
//   });
//   newAmenity.save(function (err, content) {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('successfully saved');
//     }
//   })
// };
