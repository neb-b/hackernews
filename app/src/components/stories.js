import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  StyleSheet
} from 'react-native'
import ListOfStories from './stories/list-of-stories'

const Stories = (props) => {
  const {
    loading,
    stories,
    loadStories,
    refreshing,
    refreshStories,
    navigator
  } = props

  return (
    <View>
      {
        loading
        ? <ActivityIndicator
            style={styles.spinner}
            color='#0C6A5A'
            size='large'/>
        : <ListOfStories
            stories={stories}
            refreshing={refreshing}
            loading={loading}
            refreshStories={refreshStories}
            navigator={navigator}/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  spinner: {
    paddingTop: 40
  }
})

export default Stories
