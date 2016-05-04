"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  "title": String,
  "model": String,
  "value": String,
  "answers": [String],
  "min_val": String,
  "max_val": String,
  "question": String
});

module.exports = mongoose.model("Question", QuestionSchema);
