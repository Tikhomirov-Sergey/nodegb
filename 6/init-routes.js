const { authenticate, mustbeAuthenticated } = require('./init-passport');

const UserHelper = require('./models/User/UserHelper');

const initRoutes = (app) => {

    app.get('/auth', (req, res) => {
        res.render('auth', {});
    });

    app.post('/auth', authenticate);
    app.all('/users', mustbeAuthenticated);

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/auth');
    }) 

    app.get('/users', async (req, res) => {
        const { error, result: users } = await UserHelper.findAllUsers();
        res.render('user-list', {error, users});
    });

    app.post('/users', async (req, res) => {

        const { username, password } = req.body;
        const { error, result: user } = await UserHelper.createUser(username, password);

        if(error) 
            res.send(error);

        res.redirect('/users');
    });
}

module.exports = {initRoutes}