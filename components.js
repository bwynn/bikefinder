var Bike = function(model, brand, frame, wheels, components) {
  this.model = model;
  this.brand = brand;
  this.frame = frame;
  this.wheels = wheels;
  this.components = components;
};

var Components = function(cranks, cassette, chain, frontDer, rearDer, saddle, seatpost, shifters, brakes, stem, bars) {
  this.cranks = cranks;
  this.cassette = cassette;
  this.chain = chain;
  this.frontDer = frontDer;
  this.rearDer = rearDer;
  this.saddle = saddle;
  this.seatpost = seatpost;
  this.shifters = shifters;
  this.brakes = brakes;
  this.stem = stem;
  this.bars = bars;
};

var Wheel = function(rim, spokes, hub, axle) {
  this.rim = rim;
  this.spokes = spokes;
  this.hub = hub;
  this.axle = axle;
  this.wheelSet = [
    "Enve",
    "Zipp 404",
    "Zipp 808",
    "Mavic Ksyrium",
    "Easton EC90"
  ];
};

var bike = {

}
