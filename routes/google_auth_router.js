const express = require('express');
const User = require(__dirname + '/../models/user');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var googleAuthRouter = module.exports = exports = express.Router();

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:5555/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ username: profile.emails[0].value }, (err, user) => {
      if (err) return done(err);
      if (!user) {
        User.register(new User({ username: profile.emails[0].value }), profile.id, (err, user) => {
          if (err) return done(err, user);

          // ***NOTE***
          // user.isAuthenticated = true is currently bypassing the email validation
          // layer.  once the email validation is set up, this assignment and the
          // user.save method call can be removed.
          user.isAuthenticated = true;
          user.save((err, user) => {
            return done(err, user);
          });
        });
      }
      return done(err, user);
    });
  }
));

googleAuthRouter.get('/google', passport.authenticate('google', {
  session: false,
  scope:
    [
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/plus.profile.emails.read'
    ]
  }
));

googleAuthRouter.get('/google/callback', passport.authenticate('google', { session: false }),
(req, res) => {
  req.user.generateToken((err, token) => {
    if (err) return res.status(500).json({ msg: 'could not generate token' });
    res.redirect('/auth?token=' + token);
  });
});
