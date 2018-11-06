var express = require('express');
var weatherRouter = express.Router();
var weather = require('../controllers/weather')

weatherRouter.get('/:city', function(req, res, next) {
  weather.search(req, res);
});

module.exports = weatherRouter;
