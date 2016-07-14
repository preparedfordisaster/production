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

describe('plan routes server', () => {
  before((done) => {
    server.listen(port, 'mongodb://localhost/plan_test_db');
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
  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.disconnect(() => {
        server.close(done);
      });
    });
  });

  it('should create a plan', (done) => {
    request('localhost:' + port)
    .post('/api/plan')
    .set('token', this.token)
    .send(JSON.parse(fs.readFileSync(__dirname + '/test_post1.json').toString()))
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res.body.leader.firstName).to.eql('Firstname');
      done();
    });
  });

  it('should receive stored plans from database', (done) => {
    request('localhost:' + port)
    .get('/api/plan')
    .set('token', this.token)
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(Array.isArray(res.body)).to.eql(true);
      done();
    });
  });
  describe('how to update or remove plan from database', () => {
    beforeEach((done) => {
      var newPlan = new Plan(JSON.parse(fs.readFileSync(__dirname +
        '/test_post1.json').toString()));
      newPlan.save((err, data) => {
        if (err) throw err;
        this.plan = data;
        done();
      });
    });

    it('should update existing plan', (done) => {
      request('localhost:' + port)
      .put('/api/plan/' + this.plan._id)
      .set('token', this.token)
      .send(JSON.parse(fs.readFileSync(__dirname + '/test_post2.json').toString()))
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('Plan has been updated!');
        done();
      });
    });

    it('should remove plan data from database', (done) => {
      request('localhost:' + port)
      .delete('/api/plan/' + this.plan._id)
      .set('token', this.token)
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('Deleted a plan entry');
        done();
      });
    });
  });
});
