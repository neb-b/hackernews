import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Stories from './connected/stories.connected'
import Thread from './connected/thread.connected'

const components = {
  Stories,
  Thread
}

const Layout = (props) => {
  const { navigator, route: { name } } = props
  const Component = components[name]
  return (
    <View style={styles.layout}>
      <Component navigator={navigator} {...props} />
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
