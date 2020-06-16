import React, { Component } from 'react'
import LoginInput from '../components/authorizers/LoginInput'
import CreateUser from '../components/authorizers/CreateUser'
import Message from '../components/authorizers/Message'

class NewsFeedContainer extends Component {

    state = {
        loggingIn: true
    }

handleFormSwitch = () => {
    let loggingIn = !this.state.loggingIn
    this.setState({loggingIn: loggingIn})
}

  render() {
    return (
      <div className="authorizer-container">
        <Message/>
        {this.state.loggingIn ? 
            <LoginInput handleFormSwitch={this.handleFormSwitch}/> 
            : 
            <CreateUser handleFormSwitch={this.handleFormSwitch}/> }
        
      </div>
    )
  }
}

export default NewsFeedContainer
