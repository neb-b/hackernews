import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import StatusBar from './components/common/status-bar'

const App = ({ Component, viewTitle, navigator, ...props }) => {
  return (
    <View style={styles.view}>
      <StatusBar navigator={navigator} title={viewTitle} />
      <Component navigator={navigator} {...props}/>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fbfbfb'
  }
})

export default App
