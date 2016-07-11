const express = require('express');
const User = require(__dirname + '/../models/user');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

var googleAuthRouter = module.exports = exports = express.Router();

passport.use(new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: 'http://localhost:5555/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'email']
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ username: profile.emails[0].value }, (err, user) => {
      if (err) return done(err);
      if (!user) {
        return User.register(new User({ username: profile.emails[0].value }), profile.id,
        (err, user) => {
          if (err) return done(err, user);

          // ***NOTE***
          // user.isAuthenticated = true is currently bypassing the email validation
          // layer.  once the email validation is set up, this assignment and the
          // user.save method call can be removed.
          user.isAuthenticated = true;
          user.save((err, user) => {
            done(err, user);
          });
        });
      }
      return done(err, user);
    });
  }
));

googleAuthRouter.get('/facebook', passport.authenticate('facebook', {
  session: false,
  scope: 'email'
}, () => {}
));

googleAuthRouter.get('/facebook/callback', passport.authenticate('facebook', { session: false }),
(req, res) => {
  req.user.generateToken((err, token) => {
    if (err) return res.status(500).json({ msg: 'could not generate token' });
    res.redirect('/auth?token=' + token);
  });
});
