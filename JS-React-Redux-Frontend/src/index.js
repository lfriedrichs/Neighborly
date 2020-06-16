import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import { createStore } from 'redux';

import { AuthContext } from "./context/auth"; 
import manageUser from './reducers/manageUser'
import AuthorizerContainer from './containers/AuthorizerContainer'
import App from './App';
 
const store = createStore(manageUser)

ReactDOM.render(

    <AuthContext.Provider value={false} store={store}>
      <App />
    </AuthContext.Provider>,
  document.getElementById('root')
);
