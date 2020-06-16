import React, { Component } from 'react'

import { connect } from 'react-redux'
import User from '../components/users/User'

class UserContainer extends Component {

  render() {
    return (
      <div>
        <User/>
      </div>
    )
  }
}

export default UserContainer