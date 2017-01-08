import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Stories from './components/stories'

const Layout = (props) => {
  const { loading, stories, loadStories } = props
  return (
    <View style={styles.layout}>
      <Stories loading={loading} stories={stories} loadStories={loadStories}/>
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
