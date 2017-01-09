import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import StatusBar from './components/common/status-bar'

const Layout = ({children}) => {
  return (
    <View style={styles.layout}>
      <StatusBar />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#fbfbfb'
  }
})

export default Layout
