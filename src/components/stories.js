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
  const { loading, stories,loadStories, refreshing, refreshStories, navigator } = props
  const storiesx = [
    {
      title: 'Stanford Unsupervised Deep Learning Tutorial',
      kids: [1,2,3,4,5,6],
      score: 165,
      time: 1483934979
    }
  ]
  return (
    <View>
      <ListOfStories
          loadStories={loadStories}
          stories={storiesx}
          refreshing={refreshing}
          loading={loading}
          refreshStories={refreshStories}
          navigator={navigator}/>
      {
        // loading
        // ? <ActivityIndicator
        //     style={styles.spinner}
        //     color='#66a3b4'
        //     size='large'/>
        // : <ListOfStories
        //     loadStories={loadStories}
        //     stories={stories}
        //     refreshing={refreshing}
        //     loading={loading}
        //     refreshStories={refreshStories}
        //     navigator={navigator}/>
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
