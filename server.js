// packages
// =============================================================================
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

// config
// =============================================================================
var db = require('./config/db');
var port = process.env.PORT || 8080;
// set server options
var options = {
  server: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000
    }
  }
};

mongoose.connect(db.db, options);

var newConnection = mongoose.connection;
newConnection.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(morgan('dev'));

// set static files path
app.use(express.static(__dirname + '/public'));

// routes
// =============================================================================
require('./routes/routes')(app);

// server
// =============================================================================
app.listen(port);

console.log("Server running on port " + port);

exports = module.exports = app;
