const WeatherAPI = require('../../utils/api/weather');

class WeatherController {
    constructor({ body, query }, res) {
        this.body = body;
        this.query = query;
        this.res = res;
        this.api = new WeatherAPI();
    }

    currentForecast = async () => {
        const { api, query: { city, days } } = this;

        await api.setCity(city).setDays(days).setType('FORECAST').prepareRequest().getForecast();
        this.res.json(api.getJSON());
    };
}

module.exports = WeatherController;