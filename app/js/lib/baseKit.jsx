const React = require('react');

const BaseKit = new React.createClass({
  render: function() {
    return (
      <section>
        <h2>Emergency Kit</h2>
        <label>LOCATION OF KIT</label>
        <input type="text"></input>
        <h3>Component Checklist</h3>
        <p>Check off the items you already have</p>
        <div>
            <input type="checkbox" name="Water"></input>
            <label htmlFor="Water">Water</label>
        </div>
      </section>
    );
  }
});

module.exports = BaseKit;
