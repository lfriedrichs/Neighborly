import React, { Component } from 'react'

import { connect } from 'react-redux'

class UserContainer extends Component {

  render() {
    return (
      <div>
        This feature is still in development
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserContainer)
