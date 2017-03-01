import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Router from './src/router'

const hackernews = () => (
  <View style={styles.container}>
    <Router />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

AppRegistry.registerComponent('hackernews', () => hackernews)
