const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');


var Landing = new React.createClass({
  render: function() {
    return (
      <article>
        <button>LOGIN</button>
        <button>REGISTER</button>
      </article>
    )
  }
});

ReactDOM.render(
  <ReactRouter.Router>
    <ReactRouter.Route path='/' component='Landing'>

    </ReactRouter.Route>
  </ReactRouter.Router>,
  destination
);
