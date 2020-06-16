import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GoogleMapsContainer from './containers/GoogleMapsContainer'
import UserContainer from './containers/UserContainer'
import AsksContainer from './containers/AsksContainer'
import OffersContainer from './containers/OffersContainer'
import NewsFeedContainer from './containers/NewsFeedContainer';
import AuthorizerContainer from './containers/AuthorizerContainer'


import NavBar from './components/NavBar'
import PrivateRoute from './PrivateRoute';
import { useAuth } from "./context/auth";


function App(props) {
  const { authTokens } = useAuth();
      return ( 
        <Router>
        {authTokens ?  <div className="app">
            <PrivateRoute path="/" component={NavBar} />
            <Switch>
            <PrivateRoute exact path="/home" component={NewsFeedContainer} />
            <PrivateRoute exact path="/displaymap" component={GoogleMapsContainer} />
            <PrivateRoute exact path="/asks" component={AsksContainer} />
            <PrivateRoute exact path="/offers" component={OffersContainer} />
            <PrivateRoute exact path="/user" component={UserContainer} />
          </Switch></div> : <div className="landing-page"><Route path="/" component={AuthorizerContainer}/></div>}
        </Router> 
      )
  }

  export default App