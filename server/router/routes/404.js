const Handler404 = require('express').Router();

Handler404.get('*', function (req, res) {
    res.status(404).send('<h1 align="center">404. Page Not Found.</h1>');
});

Handler404.all('*', function (req, res) {
    res.status(404).json({
        status: false,
        details: "404. Page Not Found."
    });
});

module.exports = Handler404;