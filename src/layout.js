import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Stories from './components/stories.container'

const Layout = (props) => {
  const { loading, stories } = props
  return (
    <View style={styles.layout}>
      <Stories loading={loading} stories={stories} />
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#333333'
  }
})

export default Layout
