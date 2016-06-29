const React = require('react');
const ReactDOM = require('react-dom');

var AppMain = new React.createClass({
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
  <AppMain />,
  document.getElementById('app')
);
