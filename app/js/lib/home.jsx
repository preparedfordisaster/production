const React = require('react');
const Link = require('react-router').Link;

const Home = new React.createClass({
  render: function() {
    return (
      <section>
        <button><Link to="#/login">EMAIL ME MY PLAN</Link></button>
        <button><Link to="#/myplan">EDIT OR CREATE MY DISASTER PLAN</Link></button>
        <article id="plan-summary"></article>
      </section>
    );
  }
});

module.exports = Home;
