const React = require('react');
const Redux = require('redux');
const ReactRedux = require('react-redux');
const connect = ReactRedux.connect;

const userReducer = (state, action) => {
  var newState = Object.assign({}, state, { username: 'ben' });
  return newState;
};

const planReducer = (state, action) => {
  var newState = Object.assign({}, state, { plan: 'ben plan' });
  return newState;
};

const reducers = Redux.combineReducers({
  userState: userReducer,
  planState: planReducer
});

let store = Redux.createStore(reducers);

store.subscribe(() => {
  console.log(store.getState());
});

const mapStateToProps = (store) => {
  return {
    username: store.userState.username,
    plan: store.planState.plan
  };
};

const Login = new React.createClass({
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

module.exports = connect(mapStateToProps)(Login);
