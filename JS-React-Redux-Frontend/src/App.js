import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';


import AuthorizerContainer from './containers/AuthorizerContainer'
import NavBar from './components/NavBar'
import { history } from './helpers/History';
import RouterHelper from './helpers/RouterHelper';

export default class App extends React.Component {
  render() {
    const { user } = this.props;
    return (  
        <Router history={history}>
          
          {localStorage.getItem('user') ? 
          <Route path="/" component={NavBar}/> 
          : <Route exact path="/login" component={AuthorizerContainer}/>
          }
          <RouterHelper user={this.props.user}/>
        </Router> 
      )
    }
  }



   