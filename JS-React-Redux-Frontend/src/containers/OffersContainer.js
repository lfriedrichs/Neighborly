import React, { Component } from 'react'

import { connect } from 'react-redux'

import Offer from '../components/offers/Offer'

class OffersContainer extends Component {

  render() {
    return (
      <div>
        <Offer/>
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
