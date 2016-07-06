const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongooseEmail = require('passport-local-mongoose-email');
const jwt = require('jsonwebtoken');

var userSchema = new Schema({});

userSchema.methods.generateToken = function(cb) {
  if (!this.hash) return cb(new Error('could not generate token'));
  cb(null, jwt.sign({ idd: this.hash }, process.env.APP_SECRET));
};

userSchema.plugin(passportLocalMongooseEmail);

module.exports = exports = mongoose.model('User', userSchema);
