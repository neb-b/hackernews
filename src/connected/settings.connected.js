import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Settings from '../components/settings'

const SettingsWrapper = (props) => {
  return (
    <Settings />
  )
}

const mapStateToProps = (s) => {
  return s
}

export default connect(mapStateToProps, null)(Settings)
