const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongooseEmail = require('passport-local-mongoose-email');

var userSchema = new Schema({});

userSchema.plugin(passportLocalMongooseEmail);

module.exports = exports = mongoose.model('User', userSchema);
