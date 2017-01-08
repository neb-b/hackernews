import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  StyleSheet
} from 'react-native'
import ListOfStories from './list-of-stories'

const StoriesContainer = ({ loading, stories, loadStories }) => {
  return (
    <View style={loading && styles.spinnerContainer}>
      {
        loading
        ? <ActivityIndicator color='#f1f1f1'/>
        : <ListOfStories loadStories={loadStories} stories={stories} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default StoriesContainer
