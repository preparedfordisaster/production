const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Lib = require(__dirname + '/lib/index.jsx');


ReactDOM.render(
  <ReactRouter.Router>
    <ReactRouter.Route path='/' component={Lib.Landing}></ReactRouter.Route>
    <ReactRouter.Route path='/login' component={Lib.Login}></ReactRouter.Route>
    <ReactRouter.Route path='/register' component={Lib.Register}></ReactRouter.Route>
  </ReactRouter.Router>,
  document.querySelector('.app')
);
