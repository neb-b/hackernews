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

const Stories = ({ loading, stories, loadStories }) => {
  return (
    <View style={loading ? styles.loading : ''}>
      {
        loading
        ? <ActivityIndicator/>
        : <ListOfStories loadStories={loadStories} stories={stories} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})

export default Stories
