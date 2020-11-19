module.exports = (req, res, next) => {
    const {
        appConfig: {
            API: { API_KEY = '' } = {}
        } = {}
    } = global;
    const { query: { token } } = req;

    if (API_KEY !== token) {
        res.json({
            status: false,
            details: 'Request error. Invalid token!'
        });
    }

    next();
};