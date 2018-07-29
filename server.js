'use strict';
var express = require('express');
var app = express();

//To server static assests in root dir
app.use(express.static(__dirname));
//To allow cross origin request
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//To server index.html page
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(8088, function () {
  console.log('Local Server : http://localhost:8088');
});
