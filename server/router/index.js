const
    // Middlewares
    Auth = require('./middlewares/auth'),

    // API
    WeatherRouter = require('./routes/api/weather'),

    // Handlers
    Handler404 = require('./routes/404');

module.exports = app => {
    // Middlewares
    app.use(Auth);

    // API
    app.use('/api/weather', WeatherRouter);

    // Handlers
    app.use(Handler404);
};