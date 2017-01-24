import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import StatusBar from './components/global/status-bar'

const App = ({ Component, viewTitle, navigator, index, ...props }) => {
  return (
    <View style={styles.view}>
      <StatusBar navigator={navigator} title={viewTitle} viewIndex={index} />
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
