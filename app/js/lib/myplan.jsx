const React = require('react');
const BaseKit = require('./BaseKit.jsx');

const MyPlan = new React.createClass({
  render: function() {
    return (
      <section>
        <form>
          <h2>Personal Information</h2>
          <label>FIRST NAME</label>
          <input type="text" name="firstName" value="{connect to user}"></input>
          <label>LAST NAME</label>
          <input type="text" name="lastName" value="{connect to user}"></input>
          <label>EMAIL</label>
          <input type="email" name="email" value="{connect to user}"></input>
          <label>PRIMARY PHONE</label>
          <input type="text" name="primaryPhone" value="{connect to user}" autoComplete="tel"></input>
          <h2>Address</h2>
          <label>ADDRESS LINE 1</label>
          <input type="text" name="streetAddress" autoComplete="address-line1"></input>
          <label>ADDRESS LINE 2</label>
          <input type="text" name="streetAddressPt2" autoComplete="address-line2"></input>
          <label>CITY</label>
          <input type="text" name="city" autoComplete="address-level2"></input>
          <label>STATE</label>
          <input type="text" name="state" autoComplete="address-level1"></input>
          <label>POSTAL CODE</label>
          <input type="text" name="primaryPhone" autoComplete="postal-code"></input>
          <button className="rally" id="user-rally">ADD WORK/SCHOOL RALLY POINT</button>
          <button type="submit" id="user-info-sub">SUBMIT THIS SECTION</button>
          <button className="household-member">CREATE HOUSEHOLD MEMBER</button>
          <button className="rally" id="plan-rally">SET RALLY POINTS</button>
          <BaseKit />
        </form>
      </section>
    );
  }
});

module.exports = MyPlan;
