const React = require('react');

const Landing = new React.createClass({
  render: function() {
    return (
      <section>
        <button><a href="#/login">LOGIN</a></button>
        <button><a href="#/register">REGISTER</a></button>
      </section>
    );
  }
});

module.exports = Landing;
