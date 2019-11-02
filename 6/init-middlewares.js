const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');

const { initPassport } = require('./init-passport');

const initMiddlewares = (app) => {

    app.use(cookieParser());
    app.use(session({ keys: ['secret'] }));
    app.use(bodyParser.urlencoded());

    initPassport(app);

    const templating = require('consolidate');
    app.engine('hbs', templating.handlebars);
    app.set('view engine', 'hbs');

    app.set('views', __dirname + '/views');
}

module.exports = {initMiddlewares};