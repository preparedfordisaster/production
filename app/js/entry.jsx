const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Route = ReactRouter.Route;
const browserHistory = ReactRouter.browserHistory;
const Lib = require(__dirname + '/lib/index.jsx');


ReactDOM.render(
  <ReactRouter.Router history={browserHistory}>
    <Route path='/' component={Lib.Landing}></Route>
    <Route path='/login' component={Lib.Login}></Route>
    <Route path='/register' component={Lib.Register}></Route>
    <Route path='/home' component={Lib.Home}></Route>
    <Route path='/myplan' component={Lib.MyPlan}></Route>
  </ReactRouter.Router>,
  document.querySelector('.app')
);
