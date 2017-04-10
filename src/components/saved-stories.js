import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TopicFilter from './stories/topic-filter'
import List from './generic/list'
import Story from './stories/story'

const Stories = ({savedStories, unSaveStory, navigator}) => {
  return (
    <View style={[styles.stories]}>
      <List
        data={savedStories}
        renderItem={({item: story}) => (
          <Story
            saved
            story={story}
            saveAction={unSaveStory}
            navigator={navigator} />
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
