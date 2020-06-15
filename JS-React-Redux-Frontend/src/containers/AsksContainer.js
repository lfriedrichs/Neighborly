import React, { Component } from 'react'

import { connect } from 'react-redux'

class AsksContainer extends Component {

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
    asks: state.user.asks
  }
}

export default connect(mapStateToProps)(AsksContainer)
