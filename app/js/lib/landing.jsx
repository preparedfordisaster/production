const React = require('react');

const Landing = new React.createClass({
  render: function() {
    return (
      <section>
        <button>LOGIN</button>
        <button>REGISTER</button>
      </section>
    );
  }
});

module.exports = Landing;
