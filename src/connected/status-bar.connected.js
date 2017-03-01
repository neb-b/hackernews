import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View
} from 'react-native'
import { toggleFilter, changeTopic } from '../redux/action-creators/status-bar'
import Navigation from '../components/global/status-bar'

const StatusBar = (props) => {
  const { settings } = props
  const isDark = settings[0].active //darkmode
  return (
    <Navigation {...props} isDark={isDark} />
  )
}

const mapStateToProps = (s) => {
  return {
    ...s.statusBar,
    settings: s.settings.settings
  }
}

export default connect(mapStateToProps, { toggleFilter, changeTopic })(StatusBar)
