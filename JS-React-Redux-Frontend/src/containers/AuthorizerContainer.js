import React, { Component } from 'react'
import LoginInput from '../components/authorizers/LoginInput'
import CreateUser from '../components/authorizers/CreateUser'
import { history } from '../helpers/history'


class AuthorzizerContainer extends Component {

    state = {
        loggingIn: true
    }

handleFormSwitch = () => {
    let loggingIn = !this.state.loggingIn
    this.setState({loggingIn: loggingIn})
}

  render() {
    history.push("/login")
    return (
      <div className="authorizer-container">
        {this.state.loggingIn ?   
            <LoginInput handleFormSwitch={this.handleFormSwitch} handleLogin={this.props.handleLogin}/>
            : 
            <CreateUser handleFormSwitch={this.handleFormSwitch}/> }
        
      </div>
    )
  }
}

export default AuthorzizerContainer
