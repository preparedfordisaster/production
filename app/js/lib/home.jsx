const React = require('react');

const Home = new React.createClass({
  render: function() {
    return (
      <section>
        <button><a href="#/login">EMAIL ME MY PLAN</a></button>
        <button><a href="#/myplan">EDIT OR CREATE MY DISASTER PLAN</a></button>
        <article id="plan-summary"></article>
      </section>
    );
  }
});

module.exports = Home;
