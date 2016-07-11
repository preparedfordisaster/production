const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Route = ReactRouter.Route;
const browserHistory = ReactRouter.browserHistory;
const Lib = require(__dirname + '/lib/index.jsx');


ReactDOM.render(
  <ReactRouter.Router>
    <Route path='/' component={Lib.Landing} history={browserHistory}></Route>
    <Route path='/login' component={Lib.Login} history={browserHistory}></Route>
    <Route path='/register' component={Lib.Register} history={browserHistory}></Route>
    <Route path='/home' component={Lib.Home} history={browserHistory}></Route>
    <Route path='/myplan' component={Lib.MyPlan} history={browserHistory}></Route>
  </ReactRouter.Router>,
  document.querySelector('.app')
);
