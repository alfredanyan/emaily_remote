const passport = require('passport') //original passport library, not the one in config file we created

module.exports = (app) => {
    app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback',
    passport.authenticate('google'));

}
