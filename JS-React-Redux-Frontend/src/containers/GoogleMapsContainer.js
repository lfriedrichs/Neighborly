import React, { Component } from 'react'

import { connect } from 'react-redux'

class GoogleMapsContainer extends Component {

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
    newsFeed: state.newsFeed
  }
}

export default connect(mapStateToProps)(GoogleMapsContainer)
