import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import StatusBar from './connected/status-bar.connected'

const App = ({ Component, viewTitle, navigator, index, outside, ...props }) => {
  return (
    <View style={styles.view}>
      <StatusBar navigator={navigator} title={viewTitle} viewIndex={index} outside={outside}/>
      <Component navigator={navigator} {...props}/>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  }
})

export default App
