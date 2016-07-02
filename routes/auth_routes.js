const express = require('express');
const User = require(__dirname + '/../models/user');
const bodyParser = require('body-parser').json();
const basicHTTP = require(__dirname + '/../lib/basic_http');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(User.authenticate()));

var router = module.exports = exports = express.Router();

router.post('/signup', bodyParser, (req, res) => {
  var password = req.body.password;
  req.body.password = null;

  if (!password) return res.status(500).json({ msg: 'no blank passwords' });

  User.register(new User({ username: req.body.username }), password, (err, user) => {
    password = null;

    if (err) return res.status(500).json({ msg: 'could not create user' });

    // ***NOTE***
    // user.isAuthenticated = true is currently bypassing the email validation
    // layer.  once the email validation is set up, this assignment and the
    // user.save method call can be removed.
    user.isAuthenticated = true;
    user.save((err, user) => {
      if (err) return res.status(500).json({ msg: 'saving err' });
      user.generateToken((err, token) => {
        if (err) return res.status(500).json({ msg: 'could not generate token' });
        res.json({ token });
      });
    });
  });
});

router.get('/signin', basicHTTP, passport.authenticate('local', { session: false }),
(req, res) => {
  req.user.generateToken((err, token) => {
    if (err) return res.status(500).json({ msg: 'could not generate token' });
    res.json({ token });
  });
});
