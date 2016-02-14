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


router.home = function(req, res){
  res.sendFile('../public/index.ejs');
}


router.findAll = function(req, res){
  Coffee.find(function(err, coffees){
    if (err)
    res.send(err);

    res.json(coffees);
  });
}

router.findById = function(req, res){
  var id = req.params.id;
  console.log('getting donation for id: '+id);

  Coffee.findById(id, function(err, coffee){
    if (err)
    res.send(err);

    res.send(coffee);
  });
}


router.findOne = function(req, res){
  Coffee.find({"_id": req.params.id}, function(err, coffee){
    if (err)
    res.json({message: 'Coffee Not found man!', errmsg : err});
    else
    res.json(coffee);
  });
}

router.addCoffee = function(req, res){
  var coffee = new Coffee();
  coffee.paymenttype = req.body.paymenttype;
  coffee.amount = req.body.amount;
  console.log('Adding donation :' +JSON.stringify(coffee));

//  save coffee and check for errors
  coffee.save(function(err){
    if (err)
    res.send(err);

    res.json({ message: 'Coffee Added Boi', data: coffee });
  });
}

// delete coffee
router.deleteCoffee = function(req, res){
  Coffee.findByIdAndRemove(req.params.id, function(err){
    if(err)
    res.send(err);
    else
    res.json({message: 'Coffee delete'});
  });
}

// increment vote
router.incrementUpvotes = function(req, res){
  Coffee.findById(req.params.id, function(err, coffee){
    if (err)
    res.send(err);
    else {
      coffee.upvotes += 1;
      coffee.save(function(err){
        if (err)
          res.send(err);
        else
        res.json({message: 'Coffee upvoted', data: coffee})
      });
    }
  });
}

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

module.exports = router;
