const express = require('express');

const { initMiddlewares } = require('./init-middlewares');
const { initRoutes } = require('./init-routes');

const app = express();

initMiddlewares(app);
initRoutes(app);

app.listen(3000);