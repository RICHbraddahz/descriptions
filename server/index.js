const express = require('express');
let db = require('../database/');
let app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(cors());

let port = 1129;


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

app.get('/amenities/:id', function (req, res) {
  let cb = function (data) {
    res.send(data);
  }
  db.find(req.params.id, cb);
});
