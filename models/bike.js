var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BikeSchema = new Schema({
  model: String,
  brand: String,
  year: String,
  geo: {
    ht_ang: Number,
    wh_base: Number
  },
  travel: Number,
  fs: Boolean,
  wh_size: String,
  bike_id: String,
  bike_img: {type: Schema.Types.Mixed, required: true}
});

module.exports = mongoose.model("Bike", BikeSchema);
