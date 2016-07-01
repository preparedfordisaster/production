const React = require('react');

const Home = new React.createClass({
  getInitialState: function() {
    return {
      plan: {}
    };
  },
  addPlan: function(plan) {
    var timestamp = (new Date()).getTime();
    // update state object
    this.state.plan['plan-' + timestamp] = plan;
    // set state
    this.setState({ plan: this.state.plan });
  },
  render: function() {
    return (
      <section>
        <button><a href="#/login">EMAIL ME MY PLAN</a></button>
        <button><a href="#/myplan">EDIT OR CREATE MY DISASTER PLAN</a></button>
        <article id="plan-summary">
        </article>
      </section>
    );
  }
});

module.exports = Home;
