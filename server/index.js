const express = require('express');
const bodyParser = require('body-parser');
const promise = require('bluebird');
const request = require('request-promise');
const Repo = require('../database');
let app = express();
let port = 3001;

app.use(express.static(path.join(__dirname, '../public')));



app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
