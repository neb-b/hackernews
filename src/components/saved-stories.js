import React from 'react'
import { View } from 'react-native'
import TopicFilter from './stories/topic-filter'
import List from './generic/list'
import Story from './stories/story'
import NoSavedStories from './stories/no-saved-stories'

const Stories = ({
  savedStories,
  unSaveStory,
  refreshing,
  refreshSavedStories,
  navigator,
  viewIndex,
  openSafari,
  height,
  error
}) => {
  return (
    <View>
      {error && (
        <Error refresh={() => refreshSavedStories(savedStories.map((story) => story.id))}/>
      )}
      {!!savedStories.length && (
        <List
          _style={{height: height, paddingBottom: 60}}
          items={savedStories}
          refreshing={refreshing}
          refresh={() => savedStories.length && refreshSavedStories(savedStories.map((story) => story.id))}
          renderItem={({item: story}) => (
            <Story
              saved
              story={story}
              saveAction={unSaveStory}
              navigator={navigator}
              viewIndex={viewIndex}
              openSafari={openSafari} />
          )}/>
      )}
      {!savedStories.length && (
        <NoSavedStories />
      )}
    </View>
  )
}

export default Stories
