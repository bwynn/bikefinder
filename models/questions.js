"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  "title": String,
  "model": String,
  "value": String,
  "answers": [String],
  "minVal": String,
  "maxVal": String,
  "question": String,
  "_id": String
});

module.exports = mongoose.model("Question", QuestionSchema);
