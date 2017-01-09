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

const Stories = (props) => {
  const { loading, stories, loadStories, refreshing, refreshStories } = props
  return (
    <View>
      {
        loading
        ? <ActivityIndicator
            style={styles.spinner}
            color='#66a3b4'
            size='large'/>
        : <ListOfStories
            loadStories={loadStories}
            stories={stories}
            refreshing={refreshing}
            loading={loading}
            refreshStories={refreshStories}/>
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
