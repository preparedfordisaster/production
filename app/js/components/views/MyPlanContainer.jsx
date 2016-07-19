import React from 'react';
import MyPlan from './myplan.jsx';

const MyPlanContainer = new React.createClass({
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
        <MyPlan></MyPlan>
      </section>
    );
  }
});

module.exports = MyPlanContainer;
