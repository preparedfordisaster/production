const React = require('react');
const Link = require('react-router').Link;

const Landing = new React.createClass({
  render: function() {
    return (
      <section className="main-container">
        <button><Link to="/login">LOGIN</Link></button>
        <button><Link to="/register">REGISTER</Link></button>
      </section>
    );
  }
});

module.exports = Landing;
