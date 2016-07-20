const { createStore, compose } = require('redux');
const syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore;
const browserHistory = require('react-router').browserHistory;

const rootReducer = require('./reducers/index.jsx');

const user = {};
const plan = {};

const defaultState = {
  user,
  plan
}

export const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);
