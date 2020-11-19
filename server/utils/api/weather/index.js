const axios = require('axios');

class Weather {
    constructor () {
        const { appConfig: { WEATHER } = {} } = global;
        const { KEY, BASE_URL, REQUEST_TYPES } = WEATHER;

        this.key = KEY;
        this.baseUrl = BASE_URL;
        this.requestTypes = REQUEST_TYPES;
        this.params = {
            key: this.key
        };
    };

    setCity = city => {
        this.city = city;
        return this;
    };

    setDays = days => {
        this.days = days;
        return this;
    };

    setType = type => {
        this.type = type;
        return this;
    };

    setParam = (key, value) => {
        this.params[key] = value;
        return this;
    };

    prepareRequest = () => {
        this.url = `${this.baseUrl}${this.requestTypes[this.type]}`;
        this.setParam('q', this.city);
        this.setParam('days', this.days);
        return this;
    };

    getForecast = async () => {
        const response = await axios(this.url, { params: this.params });
        const { data = {} } = response;
        const { location, current } = data;

        if (!location || !current) {
            this.json = {
                status: false,
                details: 'Request error',
                data: {}
            };
        } else {
            this.json = {
                status: true,
                details: 'Success',
                data: data
            };
        }
    };

    getJSON = () => (this.json);
}

module.exports = Weather;