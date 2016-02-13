var Coffee = require('../models/coffees');
var mongoose = require('mongoose');

var express = require('express');
var mongo = require('mongodb');
var router = express.Router();



mongoose.connect('mongodb://localhost:27017/coffeematedb');

var db = mongoose.connection;

db.on('error', function (err) {
  console.log('connection error', err);
});
db.once('open', function () {
  console.log('connected to database');
});


router.findAll = function(req, res){
  Coffee.find(function(err, coffees){
    if (err)
    res.send(err);

    res.json(coffees);
  });
}




/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

module.exports = router;
