const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/amenities');

let repoSchema = mongoose.Schema({

});

let Repo = mongoose.model('Repo', repoSchema);

repoSchema.index({repo_id: 1}, {uniqe: true});

module.exports = Repo;
