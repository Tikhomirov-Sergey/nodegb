const UserHelper = require('./models/User/user-helper');

const initRoutes = (app) => {

    app.get('/api/user-list', async (req, res, next) => {
        const data = await UserHelper.findAllUsers();
        res.json(data);
    })
}

module.exports = { initRoutes };