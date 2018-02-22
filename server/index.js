const express = require('express');
const bodyParser = require('body-parser');
const promise = require('bluebird');
const request = require('request-promise');
const Repo = require('../database');
let app = express();

app.get('/', (req, res) => {

});

let port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
