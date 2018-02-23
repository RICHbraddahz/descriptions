const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/amenities');

let repoSchema = mongoose.Schema({
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

let Repo = mongoose.model('Repo', repoSchema);

repoSchema.index({repo_id: 1}, {uniqe: true});

module.exports = Repo;
