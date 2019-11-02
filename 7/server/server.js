const express = require('express');

const { initMiddleware } = require('./init-middleware');
const { initRoutes } = require('./init-routes');
const { initPassport } = require('./init-passport');

const app = express();

initMiddleware(app);
initRoutes(app);
initPassport(app);

app.listen(5555);

