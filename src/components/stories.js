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
    <View>
      {
        loading
        ? <ActivityIndicator style={styles.spinner} color='#f2f2f2'/>
        : <ListOfStories loadStories={loadStories} stories={stories} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  spinner: {
    paddingTop: 50
  }
})

export default Stories
