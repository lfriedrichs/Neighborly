import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import manageUser from './reducers/manageUser'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
const store = createStore(manageUser)

ReactDOM.render(

  <Provider store={store}>
    <Router >
      <Route exact path="/" component={App} />
    </Router>),
  </Provider>,
  document.getElementById('root')
);
