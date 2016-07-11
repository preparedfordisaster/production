const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Components = require(__dirname + '/components/index.jsx');
const Route = ReactRouter.Route;
const browserHistory = ReactRouter.browserHistory;


ReactDOM.render(
  <ReactRouter.Router>
    <ReactRouter.Route path='/' component={Components.Landing}></ReactRouter.Route>
    <ReactRouter.Route path='/login' component={Components.Login}></ReactRouter.Route>
    <ReactRouter.Route path='/register' component={Components.Register}></ReactRouter.Route>
    <ReactRouter.Route path='/home' component={Components.Home}></ReactRouter.Route>
    <ReactRouter.Route path='/myplan' component={Components.MyPlan}></ReactRouter.Route>
    <ReactRouter.Route path='*' component={Components.NotFound}></ReactRouter.Route>
  </ReactRouter.Router>,
  document.querySelector('.app')
);
