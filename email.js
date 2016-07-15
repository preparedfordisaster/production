const email = require(__dirname + '/lib/chron_email.js');
const Plan = require(__dirname + '/models/plan.js');
const handlebars = require('handlebars');
const readFile = require('fs-readfile-promise');
const errorHandler = require(__dirname + '/lib/errorHandler.js');
const mongoose = require('mongoose');

function check(cb) {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/plan_db', (err, done) => {
    if (err) return errorHandler(err);
    var now = new Date();
    Plan.find( { 'reminderDate': { $lt: now } }, (err, remindArray) => {
      if (err) return console.log(err);
      var body;
      var template;
      readFile(__dirname + '/view/mail_template.html').then((buffer) => {
        template = handlebars.compile(buffer.toString());
        remindArray.forEach((value) => {
          body = template(value);
          var mailConfig = {
            from: 'info@preparedfordisaster.org',
            to: value.email,
            subject: 'Your Emergency Disaster Plan as of: ' + now,
            html: body
          };
          email.sendMail(mailConfig, (err, info) => {
            if (err) return console.log(err);
            process.stdout.write('Message sent: ' + info.response + '\n');
          });
          value.reminderDate.setDate(value.reminderDate.getDate() + value.reminderFrequency);
          var updateData = Object.assign({}, value.toObject());
          delete updateData._id;
          Plan.update({ _id: value._id }, updateData, (err) => {
            if (err) return console.log(err);
            console.log('updated successfully');
          });
        });
        var timerCounter = 0;
        var timer = setInterval(() => {
          Plan.find( { 'reminderDate': { $lt: now } }, (err, checkArray) => {
            if (err) console.log(err);
            timerCounter++;
            if ( checkArray.length === 0 || timerCounter === 30) {
              mongoose.disconnect(done);
              clearInterval(timer);
              var callback = cb || function() {};
              // for testing purposes only
              callback();
            }
          });
        }, 1000);
      });
    });
  });
}
module.exports = exports = check;
