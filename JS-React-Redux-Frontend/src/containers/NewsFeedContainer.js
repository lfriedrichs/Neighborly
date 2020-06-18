import React, { Component } from 'react'

import { connect } from 'react-redux'

import AskSummary from '../components/asks/AskSummary'

class NewsFeedContainer extends Component {

  render() {
    return (
      <div className="news-feed-container">
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {this.props.user.user.first_name}!</h1>
                <p>You're logged in with React & JWT!!</p>
                <h3>Users from secure api end point:</h3>               
            </div>
        <AskSummary/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.authentication.user
  }
}

export default connect(mapStateToProps)(NewsFeedContainer)
