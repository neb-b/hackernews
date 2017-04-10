import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TopicFilter from './stories/topic-filter'
import List from './generic/list'
import Story from './stories/story'

const Stories = ({isSavedView, stories, saveStory, unSaveStory, navigator}) => {
  console.log('navigator', navigator);
  return (
    <View style={[styles.stories]}>
      <List
        data={stories}
        renderItem={({item: story}) => (
          <Story
            story={story}
            saveAction={story.saved ? unSaveStory : saveStory}
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
