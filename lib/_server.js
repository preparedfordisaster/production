const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const authRouter = require(__dirname + '/../routes/auth_routes');
const planRouter = require(__dirname + '/../routes/plan_routes');
const emailRouter = require(__dirname + '/../routes/email_router');
const googleAuthRouter = require(__dirname + '/../routes/google_auth_router');
const facebookAuthRouter = require(__dirname + '/../routes/facebook_auth_router');

app.use(passport.initialize());

app.use('/api', authRouter);
app.use('/api', planRouter);
app.use('/api', emailRouter);
app.use('/auth', googleAuthRouter);
app.use('/auth', facebookAuthRouter);

app.use(express.static(__dirname + '/../build'));

module.exports = exports = {
  server: {
    close: function() { throw new Error('server not started yet'); }  //  eslint-ignore-line semi
   },
    listen: function(port, mongoLoc, cb) {
    mongoose.connect(mongoLoc);
    return this.server = app.listen(port, cb);
  },
  close: function(cb) {
    this.server.close();
    if (cb) cb();
  }
};
