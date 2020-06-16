import React, { Component } from 'react'

import { connect } from 'react-redux'

import AskSummary from '../components/asks/AskSummary'

class NewsFeedContainer extends Component {

  render() {
    return (
      <div>
        <AskSummary/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    newsFeed: state.newsFeed
  }
}

export default connect(mapStateToProps)(NewsFeedContainer)
