const Weather = require('express').Router();
const WeatherController = require('../../../controllers/weather')

Weather.get('/', (req, res) => {
    (new WeatherController(req, res)).currentForecast();
});

module.exports = Weather;