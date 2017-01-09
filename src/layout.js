import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

const Layout = ({children}) => {
  return (
    <View style={styles.layout}>
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
