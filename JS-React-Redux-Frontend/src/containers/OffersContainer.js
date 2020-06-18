import React, { Component } from 'react'

import { connect } from 'react-redux'

import Offer from '../components/offers/Offer'

class OffersContainer extends Component {

  render() {
    return (
      <div className="offers-container">
        <Offer/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    offers: state
  }
}

export default connect(mapStateToProps)(OffersContainer)
