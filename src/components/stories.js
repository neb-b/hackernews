import React from 'react'
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native'
import TopicFilter from './stories/topic-filter'
import List from './generic/list'
import Error from './generic/error'
import Button from './generic/button'
import Story from './stories/story'

const Stories = ({
  viewIndex,
  error,
  isSavedView,
  stories,
  saveStory,
  unSaveStory,
  topics,
  navigator,
  changeTopic,
  refreshStories,
  refreshing,
  openSafari
}) => {
  return (
    <View style={styles.stories}>
      {error && (
        <Error refresh={() => refreshStories(topics.currentlySelected)}/>
      )}
      <List
        header={() => <TopicFilter topics={topics} changeTopic={changeTopic} />}
        items={stories}
        refresh={() => refreshStories(topics.currentlySelected)}
        refreshing={refreshing}
        renderItem={({item: story}) => (
          <Story
            story={story}
            saveAction={story.saved ? unSaveStory : saveStory}
            navigator={navigator}
            viewIndex={viewIndex}
            openSafari={openSafari} />
        )}/>
    </View>
  )
}

const styles = StyleSheet.create({
  stories: {
    // marginRight: 25
  }
})

export default Stories
