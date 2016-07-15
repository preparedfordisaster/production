const chaiHTTP = require('chai-http');
const chai = require('chai');
const expect = chai.expect;
chai.use(chaiHTTP);
const request = chai.request;
const fs = require('fs');
const mongoose = require('mongoose');
const port = process.env.PORT = 1234;
const server = require(__dirname + '/../lib/_server');
const User = require(__dirname + '/../models/user');
const Plan = require(__dirname + '/../models/plan');
process.env.APP_SECRET = 'secret';

describe('email plan test', () => {
  before((done) => {
    server.listen(port, 'mongodb://localhost/email_plan_test_db');
    done();
  });

  before((done) => {
    User.register(new User({ username: 'Rachel' }), '246', (err, user) => {
      if (err) return console.log(err);

      // ***NOTE***
      // user.isAuthenticated = true is currently bypassing the email validation
      // layer.  once the email validation is set up, this assignment and the
      // user.save method call can be removed.
      user.isAuthenticated = true;
      user.save((err, user) => {
        if (err) return console.log(err);
        user.generateToken((err, token) => {
          if (err) return console.log(err);
          this.token = token;
          done();
        });
      });
    });
  });

  before((done) => {
    var newPlan = new Plan(JSON.parse(fs.readFileSync(__dirname + '/test_post2.json').toString()));
    newPlan.save((err) => {
      if (err) return console.log(err);
      done();
    });
  });

  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.disconnect(() => {
        server.close(done);
      });
    });
  });

  it('should send an email with the user plan', (done) => {
    request('localhost:' + port)
    .post('/api/email')
    .set('token', this.token)
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.body.msg).to.eql('Email Sent!');
      expect(res.status).to.eql(200);
      done();
    });
  });
});
