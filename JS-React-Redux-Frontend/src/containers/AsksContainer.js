import React, { Component } from 'react'

import { connect } from 'react-redux'

import Ask from '../components/asks/Ask'

class AsksContainer extends Component {

  render() {
    return (
      <div>
        <Ask/>
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
