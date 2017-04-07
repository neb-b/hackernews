import React, { Component } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'

class SavedStories extends Component {
  componentDidMount () {
    const { savedStoryIds, stories, loadSavedStories } = this.props

    if (savedStoryIds.length && savedStoryIds.length === stories.length) {
      loadSavedStories()
    }
  }

  render () {
    const { savedStoryIds, stories, loading } = this.props

    return (
      <View>
        {loading && <ActivityIndicator />}
        {!savedStoryIds.length && <Text style={{alignSelf: 'center'}}>No saved stories</Text>}
      </View>
    )
  }
}

export default SavedStories
