import React from 'react'
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native'
import TopicFilter from './stories/topic-filter'
import List from './generic/list'
import Story from './stories/story'

const Stories = ({
  viewIndex,
  isSavedView,
  stories,
  saveStory,
  unSaveStory,
  topics,
  navigator,
  changeTopic,
  loading
}) => {
  return (
    <View style={[styles.stories]}>
      {loading && <ActivityIndicator />}
      {!loading && (
        <List
          header={() => <TopicFilter topics={topics} changeTopic={changeTopic} />}
          items={stories}
          renderItem={({item: story}) => (
            <Story
              story={story}
              saveAction={story.saved ? unSaveStory : saveStory}
              navigator={navigator}
              viewIndex={viewIndex} />
          )}/>
      )}
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Stories
