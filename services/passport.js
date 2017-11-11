const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('Access Token', accessToken);
      console.log('Refresh Token', refreshToken);
      console.log('Profile', profile);
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          //there is already a record
          done(null, existingUser);
        } else {
          //no current record
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
