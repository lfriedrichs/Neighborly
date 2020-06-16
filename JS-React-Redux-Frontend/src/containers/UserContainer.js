import React, { Component } from 'react'

import { connect } from 'react-redux'
import User from '../components/users/User'

class UserContainer extends Component {

  render() {
    return (
      <div className="user-container">
        <User/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (text) => dispatch({type: "ADD_RESTAURANT", text: text}),
    deleteRestaurant: (id) => dispatch({type: "DELETE_RESTAURANT", id: id})
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)