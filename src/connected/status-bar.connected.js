import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View
} from 'react-native'
import { toggleFilter, changeTopic } from '../redux/action-creators/status-bar'
import Navigation from '../components/global/status-bar'

const StatusBar = (props) => (
  <Navigation {...props} />
)

const mapStateToProps = (s) => {
  return {...s.statusBar}
}

export default connect(mapStateToProps, { toggleFilter, changeTopic })(StatusBar)
