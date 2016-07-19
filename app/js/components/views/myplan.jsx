const React = require('react');
const BaseKit = require('./BaseKit.jsx');


const MyPlan = new React.createClass({
  createPlan: function(event) {
    event.preventDefault();
    var plan = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      email: this.refs.email.value,
      primaryPhone: this.refs.primaryPhone.value,
      streetAddress: this.refs.streetAddress.value,
      streetAddressPt2: this.refs.streetAddressPt2.value,
      city: this.refs.city.value,
      state: this.refs.state.value,
      postalCode: this.refs.postalCode.value
    };
    Home.props.addPlan(plan);
    this.refs.planForm.reset();
  },

  render: function() {
    return (
      <section>
        <form ref="planForm" onSubmit={this.createPlan}>
          <h2>Personal Information</h2>
          <label>FIRST NAME</label>
          <input type="text" name="firstName" ref="firstName" placeholder="First Name"></input>
          <label>LAST NAME</label>
          <input type="text" name="lastName" ref="lastName" placeholder="Last Name"></input>
          <label>EMAIL</label>
          <input type="email" name="email" ref="email" placeholder="Email"></input>
          <label>PRIMARY PHONE</label>
          <input type="text" name="primaryPhone" ref="primaryPhone" autoComplete="tel"></input>
          <h2>Address</h2>
          <label>ADDRESS LINE 1</label>
          <input type="text" name="streetAddress" ref="streetAddress" autoComplete="address-line1"></input>
          <label>ADDRESS LINE 2</label>
          <input type="text" name="streetAddressPt2" ref="streetAddressPt2" autoComplete="address-line2"></input>
          <label>CITY</label>
          <input type="text" name="city" ref="city" autoComplete="address-level2"></input>
          <label>STATE</label>
          <input type="text" name="state" ref="state" autoComplete="address-level1"></input>
          <label>POSTAL CODE</label>
          <input type="text" name="postalCode" ref="postalCode" autoComplete="postal-code"></input>
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
