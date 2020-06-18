import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import AuthorizerContainer from './containers/AuthorizerContainer'
import NavBar from './components/NavBar'
import { authActions } from './actions/user';


import GoogleMapsContainer from './containers/GoogleMapsContainer'
import UserContainer from './containers/UserContainer'
import AsksContainer from './containers/AsksContainer'
import OffersContainer from './containers/OffersContainer'
import NewsFeedContainer from './containers/NewsFeedContainer';

import { PrivateRoute } from './components/PrivateRoute';

class App extends React.Component {

  state = {
    render: true
  }

  handleLogin = () => {
    this.setState({render: true})
    }

  handleLogout = () => {
      if (localStorage.getItem('user')) {
        this.props.dispatch(authActions.logout());
        this.setState({render: true})
      }
  }

  render() {
    return (  
        <Router>
          
          {localStorage.getItem('user') ? 
            <div className="app-route">
              <Route path="/" component={() => <NavBar handleLogout={this.handleLogout}/>}/> 
              < Switch>
                <PrivateRoute exact path="/displaymap" component={GoogleMapsContainer} />
                <PrivateRoute exact path="/asks" component={AsksContainer} />
                <PrivateRoute exact path="/offers" component={OffersContainer} />
                <PrivateRoute exact path="/user" component={UserContainer} />  
                <PrivateRoute path="/home" component={NewsFeedContainer} />                 
                <Redirect to="/home"/>
              </Switch>   
            </div>     
          : <Route path="/" component={() => <AuthorizerContainer handleLogin={this.handleLogin}/>}/>
        }
          </Router> 
      )
    }
  }

  export default connect()(App)



   