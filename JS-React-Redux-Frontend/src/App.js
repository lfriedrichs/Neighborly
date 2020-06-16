import React, { Component } from 'react';
import Message from './components/authorizers/Message'
import LoginInput from './components/authorizers/LoginInput'

class App extends Component {

    render() {
      return (
        <div>
            <Message/>
            <LoginInput/>
        </div>
      )
    }
  }

  export default App