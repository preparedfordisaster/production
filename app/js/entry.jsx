const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Route = ReactRouter.Route;
const browserHistory = ReactRouter.browserHistory;
const components = require(__dirname + '/components/index.jsx');
const Provider =  require('react-redux');
const store = require('./store.jsx');
const history = store.history;


ReactDOM.render(
  <Provider store={store}>
    <ReactRouter.Router history={history}>
      <Route path='/' component={components.Landing}></Route>
      <Route path='/login' component={components.Login}></Route>
      <Route path='/register' component={components.Register}></Route>
      <Route path='/home' component={components.Home}></Route>
      <Route path='/myplan' component={components.MyPlan}></Route>
    </ReactRouter.Router>
  </Provider>,
  document.querySelector('.app')
);
