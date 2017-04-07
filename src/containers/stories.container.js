import React, { Component } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import Stories from '../components/stories'

class StoriesContainer extends Component {
  componentDidMount () {
    // console.log('stories', this.props);
    const { stories, topics, loadStories } = this.props
    // Fetch stories

    if (!stories.length) {
      loadStories(topics.currentlySelected)
    }
  }

  render () {
    const { loading, stories, saveStory } = this.props
    return (
      <View>
        {loading && <ActivityIndicator />}
        {!loading && <Stories stories={stories} saveStory={saveStory} />}
      </View>
    )
  }
}

export default StoriesContainer
