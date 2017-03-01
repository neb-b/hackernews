import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View
} from 'react-native'
import Settings from '../components/settings'
import { updateSettings } from '../redux/action-creators/settings'

const SettingsWrapper = (props) => (
  <Settings {...props} />
)

const mapStateToProps = (s) => {
  return {...s.settings}
}

export default connect(mapStateToProps, { updateSettings })(SettingsWrapper)
