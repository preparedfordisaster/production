import React from 'react';
import { render } from 'react-dom';

import Components from './components/views/index.jsx';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
//import store, { history } from './store';

const router = (

    <Router history={browserHistory}>
      <Route path="/" component={Components.Main}>
        <IndexRoute component={Components.Landing}></IndexRoute>
        <Route path="/register" component={Components.Register}></Route>
        <Route path="/login" component={Components.Login}></Route>
        <Route path="/home" componet={Components.MyPlanContainer}></Route>
      </Route>
    </Router>

)

render(router, document.getElementById('app'));
