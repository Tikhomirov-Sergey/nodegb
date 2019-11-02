const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const connect = require('./mongo-connect');
const UserHelper = require('./models/User/UserHelper');

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password',
        successRedirect: '/user',
        failureRedirect: '/auth',
    },
    async (email, password, done) => {

        const { error, result } = await UserHelper.verifyUser(email, password);

        if(error)
            done(error);

        if(result) {
            done(null, { username: result.username, id: result._id });
        } 
        else 
        {
            done('Неверный логин или пароль')
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});
  
passport.deserializeUser(async (id, done) => {

    const { error, result } = await UserHelper.findById(id);

        if(error)
            done(error);

        if(result) {
            done(null, { username: result.username, id: result._id });
        } 
        else 
        {
            done('Неверный логин или пароль')
        }
});

const authenticate = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
      return err 
        ? next(err)
        : user
          ? req.logIn(user, function(err) {
              return err
                ? next(err)
                : res.redirect('/user');
            })
          : res.redirect('/auth');
    }
  )(req, res, next);
}

const mustbeAuthenticated = (req, res, next) => {
    
    console.log('mustbAuth', req.isAuthenticated());

    if(req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/auth')
    }
}

const initPassport = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
}

module.exports = {passport, authenticate, mustbeAuthenticated, initPassport}