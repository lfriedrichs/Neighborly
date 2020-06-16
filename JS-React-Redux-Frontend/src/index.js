import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import manageUser from './reducers/manageUser'
import GoogleMapsContainer from './containers/GoogleMapsContainer'
import UserContainer from './containers/UserContainer'
import AsksContainer from './containers/AsksContainer'
import OffersContainer from './containers/OffersContainer'
import NewsFeedContainer from './containers/NewsFeedContainer';
import App from './App';
import NavBar from './components/NavBar'



 
const store = createStore(manageUser)

ReactDOM.render(

  <Provider store={store}>
    <Router >
      <div>
        <NavBar/>
        <Route exact path="/home" component={NewsFeedContainer} />
        <Route exact path="/displaymap" component={GoogleMapsContainer} />
        <Route exact path="/asks" component={AsksContainer} />
        <Route exact path="/offers" component={OffersContainer} />
        <Route exact path="/user" component={UserContainer} />
        <Route exact path="/" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
