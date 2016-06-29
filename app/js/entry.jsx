const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');


var Landing = new React.createClass({
  render: function() {
    return (
      <section>
        <button>LOGIN</button>
        <button>REGISTER</button>
      </section>
    );
  }
});

var Login = new React.createClass({
  render: function() {
    return (
      <form>
        <label>EMAIL</label>
        <input type="text" name="email"></input>
        <label>PASSWORD</label>
        <input type="password" name="password"></input>
        <button>LOGIN</button>
      </form>
    );
  }
});

var Register = new React.createClass({
  render: function() {
    return (
      <form>
        <label>FIRST NAME</label>
        <input type="text" name="firstName"></input>
        <label>LAST NAME</label>
        <input type="text" name="lastName"></input>
        <label>EMAIL</label>
        <input type="email" name="email"></input>
        <label>CONFIRM EMAIL</label>
        <input type="email" name="confirmEmail"></input>
        <label>PASSWORD</label>
        <input type="password" name="password"></input>
        <label>CONFIRM PASSWORD</label>
        <input type="password" name="confirmPassword"></input>
        <button>REGISTER</button>
      </form>
    );
  }
});

ReactDOM.render(
  <ReactRouter.Router>
    <ReactRouter.Route path='/' component={Landing}></ReactRouter.Route>
    <ReactRouter.Route path='/login' component={Login}></ReactRouter.Route>
    <ReactRouter.Route path='/register' component={Register}></ReactRouter.Route>
  </ReactRouter.Router>,
  document.querySelector('.app')
);
