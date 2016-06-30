const express = require('express');
const User = require(__dirname + '/../models/user');
const bodyParser = require('body-parser').json();
const basicHTTP = require(__dirname + '/../lib/basic_http');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(User.authenticate()));

var router = module.exports = exports = express.Router();

router.post('/signup', bodyParser, (req, res) => {
  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) return console.log(err);
    console.log(user);

    res.status(200).json({ msg: 'just testing' });

    // passport.authenticate('local', { session: false }),
  });

  // var password = req.body.password;
  // req.body.password = null;
  //
  // if (!password) return res.status(500).json({ msg: 'Password is needed' });
  //
  // var newUser = new User(req.body);
  // newUser.generateHash(password);
  // password = null;
  //
  // newUser.save((err, user) => {
  //   if (err) return res.status(500).json({ msg: 'Could not create user' });
  //
  //   user.generateToken((err, token) => {
  //     if (err) return res.status(500).json({ msg: 'Could not generate token' });
  //
  //     res.json({ token });
  //   });
  // });
});

router.get('/signin', basicHTTP, passport.authenticate('local', { session: false }),
(req, res) => {
  console.log(req.user);
  res.status(200).json({ msg: 'login testing' });
  // User.findOne({ username: req.auth.username }, (err, user) => {
  //   if (err) {
  //     return res.status(500).json({
  //        msg: 'Could not authenticate. Please re-enter username and password again'
  //      });
  //   }
  //   if (!user) {
  //     return res.status(500).json({
  //        msg: 'Could not authenticate. Please re-enter username and password again'
  //      });
  //   }
  //   if (!user.compareHash(req.auth.password)) {
  //     return res.status(500).json({
  //        msg: 'Could not authenticate. Please re-enter username and password again'
  //      });
  //   }
  //   user.generateToken((err, token) => {
  //     if (err) {
  //       return res.status(500).json({ msg: 'Could not generate token. Please try again later' });
  //     }
  //     res.json({ token });
  //   });
  // });
});
