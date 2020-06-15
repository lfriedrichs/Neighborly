import React, { Component } from 'react'

import { connect } from 'react-redux'

class OffersContainer extends Component {

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
    offers: state.user.offers
  }
}

export default connect(mapStateToProps)(OffersContainer)
