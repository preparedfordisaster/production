const router = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
              <more routes>
            </Route>
        </Router>
    </Provider>
)

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;


//actions
plan actions
  make plan
    add household member
    add rally point
  edit plan
    edit household member
    edit rally point
  delete plan

user actions
  create user
  get user

//dispatches (how to handle actions)



// stateful components
baseKit
landing
planDisplay

// stateless components
baseKitFixed  // need to have connect(basekit)(app)
homeFixed     // need to have connect(planDispay)(app)
landingFixed  // need to have connect(landing)(app)

myplan.jsx
login.jsx
register.jsx
landing.jsx
