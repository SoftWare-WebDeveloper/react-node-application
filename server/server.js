const
    express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    cors = require('cors'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    config = require('./config')(),
    router = require('./router');

global.appRoot = __dirname;
global.appConfig = config;
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:8080'}));
router(app);

server.listen(config.SERVER.PORT, () => {
    console.log(
        '\x1b[32m',
        '\n---------------------\n',
        'Server listening port: '+config.SERVER.PORT,
        '\n---------------------\n',
        '\x1b[0m'
    );
});