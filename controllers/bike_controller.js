var mongoose = require('mongoose');
var Bike = require('../models/bike');

// find all bikes
exports.getBikes = function(req, res) {
  Bike.find({}, function(err, bike) {
    if (err) {
      res.send(err);
    }

    res.json(bike);
  });
};

exports.getBike = function(req, res) {
  console.log("req.params.id = " + req.params.id);
  Bike.findById(req.params.id, function(err, bike) {
    if (err) {
      return res.send(err);
    }

    res.json(bike);
  });
};

// add a new bike
exports.newBike = function(req, res) {
  var bike = new Bike();

  bike.model = req.body.model;
  bike.brand = req.body.brand;
  bike.year = req.body.year;
  bike.geo.ht_ang = req.body.ht_ang;
  bike.geo.wh_base = req.body.wh_base;
  bike.travel = req.body.travel;
  bike.fs = req.body.fs;
  bike.wh_size = req.body.wh_size;
  bike.bike_id = req.body.bike_id;
  bike.bike_img = req.body.bike_img;

  bike.save(function(err, bike) {
    if (err) {
      res.send(err);
    }

    res.json({message: "Bike Saved: " + bike});
  });
};

// udpate an existing bike record
exports.updateBike = function(req, res) {
  console.log(req.body);
  Bike.findOne({"_id": req.body.id}, function(err, bike) {
    Bike.update({'bike_id': req.body.bike_id}, {
      model: req.body.model,
      brand: req.body.brand,
      year: req.body.year,
      "geo.ht_ang": req.body.ht_ang,
      "geo.wh_base": req.body.wh_base,
      travel: req.body.travel,
      fs: req.body.fs,
      wh_size: req.body.wh_size,
      travel: req.body.travel
    }, function(err, bike) {
      if (err) {
        return res.send(err);
      }

      res.json(bike);
    });
  });
};

// remove a bike
exports.removeBike = function(req, res) {
  console.log(req.body);
  Bike.remove({"_id": req.body.id}, function(err, bike) {
    if (err) {
      res.send(err);
    }

    res.json({message: "Bike successfully removed"});
  });
};
