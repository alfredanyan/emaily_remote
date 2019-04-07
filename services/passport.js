
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js')
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
User.findById(id).then(user => {
    done(null, user);
});
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},
(accessToken, refreshToken, profile, done) => {
    /* console.log('access token:', accessToken);
    console.log('refresh token: ', refreshToken);
    console.log('profile', profile); */
    User.findOne({ googleId: profile.id })
        .then((existingUser) => {
            if (existingUser) {
                done(null, existingUser);

            } else {
                // create new user and save to db
                new User({ googleId: profile.id})
                    .save()
                    .then(user => done(null, user));
            }
        });
   //console.log('id is: ', profile.id)
}
));
/* function(accessToken, refreshToken, profile, cb) {
    URLSearchParams.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
 
     });
}
));
 */

