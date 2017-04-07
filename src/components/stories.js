import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TopicFilter from './stories/topic-filter'
import List from './generic/list'
import Story from './stories/story'

const Stories = ({isSavedView, stories, saveStory}) => {
  return (
    <View style={[styles.stories]}>
      <TopicFilter style={styles.filter} />
      <List
        listItems={stories}
        renderRow={(story) => (
        <Story
          key={story.id}
          story={story}
          navigator={navigator}
          isSavedView={isSavedView}
          saveStory={saveStory} />
      )}/>
    </View>
  )
}

const styles = StyleSheet.create({
  stories: {
    marginBottom: 64
  }
})

export default Stories
