const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/amenities');
const data = require('../mockData.js');

let amenitiesSchema = mongoose.Schema({
  id: '$oid',
  user: {
    name: 'string',
    thumbnail: 'string',
    link: 'string',
  },
  shipDetails: {
    capacity: 'number',
    boatRules: 'array',
    heads: 'number',
    description: 'string',
    bedrooms: {
      bedrooms: 'number',
      sleepingArangement: 'array',
    },
    amenities: {
      priority: {
        anchor: 'boolean',
        engine: 'boolean',
        lifeJacket: 'boolean',
        twoWayRadio: 'boolean',
        soundSystem: 'boolean',
        tv: 'boolean',
        kitchen: 'boolean',
        ac: 'boolean',
        heating: 'boolean',
      },
      optional: {
        inflatables: 'boolean',
        fishingGear: 'boolean',
        scubaGear: 'boolean',
        harpoons: 'boolean',
        sharkCage: 'boolean',
        medication: 'boolean',
        wifi: 'boolean',
        pool: 'boolean',
      },
    }
  },
});

let Amenities = mongoose.model('Amenities', amenitiesSchema);

const save = (amenitiy, callback) => {
  const newAmenity = new Amenities({
    id: amenitiy.id,
    user: {
      name: amenitiy.user.name,
      thumbnail: amenitiy.user.thumbnail,
      link: amenitiy.user.link,
    },
    shipDetails: {
      capacity: amenitiy.shipDetails.capacity,
      boatRules: amenitiy.shipDetails.boat_rules,
      heads: amenitiy.shipDetails.heads,
      description: amenitiy.shipDetails.description,
      bedrooms: {
        bedrooms: amenitiy.shipDetails.bedrooms.bedrooms,
        sleepingArangement: amenitiy.shipDetails.bedrooms.sleeping_arangement,
      },
      amenities: {
        priority: {
          anchor: amenitiy.shipDetails.amenities.priority.anchor,
          engine: amenitiy.shipDetails.amenities.priority.engine,
          lifeJacket: amenitiy.shipDetails.amenities.priority.lifeJacket,
          twoWayRadio: amenitiy.shipDetails.amenities.priority.twoWayRadio,
          soundSystem: amenitiy.shipDetails.amenities.priority.soundSystem,
          tv: amenitiy.shipDetails.amenities.priority.tv,
          kitchen: amenitiy.shipDetails.amenities.priority.kitchen,
          ac: amenitiy.shipDetails.amenities.priority.ac,
          heating: amenitiy.shipDetails.amenities.priority.heating,
        },
        optional: {
          inflatables: amenitiy.shipDetails.amenities.optional.inflatables,
          fishingGear: amenitiy.shipDetails.amenities.optional.fishingGear,
          scubaGear: amenitiy.shipDetails.amenities.optional.scubaGear,
          harpoons: amenitiy.shipDetails.amenities.optional.harpoons,
          sharkCage: amenitiy.shipDetails.amenities.optional.sharkCage,
          medication: amenitiy.shipDetails.amenities.optional.medication,
          wifi: amenitiy.shipDetails.amenities.optional.wifi,
          pool: amenitiy.shipDetails.amenities.optional.pool,
        },
      }
    },
  });
  newAmenity.save(function (err, content) {
    if (err) {
      console.error(err);
    } else {
      console.log('successfully saved');
    }
  })
};

const other = () => {
  for (var i = 0; i < data.length; i++) {
    save(data[i]);
  }
}

const find = (id, callback) => {
  Amenities.find({id : id}, function (err, item){
    callback(item);
  })
}

module.exports.amenities = Amenities;
module.exports.find = find;
module.exports.save = save;
module.exports.db = mongoose;
