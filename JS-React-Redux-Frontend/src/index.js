import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import manageUser from './reducers/manageUser'
import GoogleMapsContainer from './containers/GoogleMapsContainer'
import UserContainer from './containers/UserContainer'
import AsksContainer from './containers/AsksContainer'
import OffersContainer from './containers/OffersContainer'
import NewsFeedContainer from './containers/NewsFeedContainer';
import App from './App';
import NavBar from './components/NavBar'
import { AuthContext } from "./context/auth"; 
import PrivateRoute from './PrivateRoute';
 
const store = createStore(manageUser)

ReactDOM.render(

  <Provider store={store}>
    <AuthContext.Provider value={false}>
      <Router >
        <div>
          <Switch>
            <PrivateRoute exact path="/home" component={NewsFeedContainer} />
            <PrivateRoute exact path="/displaymap" component={GoogleMapsContainer} />
            <PrivateRoute exact path="/asks" component={AsksContainer} />
            <PrivateRoute exact path="/offers" component={OffersContainer} />
            <PrivateRoute exact path="/user" component={UserContainer} />
            <Route exact path="/" component={App} />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  </Provider>,
  document.getElementById('root')
);
