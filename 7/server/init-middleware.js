const bodyParser = require('body-parser');
const { verifyToken } = require('./init-passport')


const initMiddleware = (app) => {

    app.use(bodyParser.json());

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
        res.header("Access-Control-Allow-Headers", "*");
        next();
    });

    app.all('/api/*', verifyToken)

} 

module.exports = { initMiddleware };