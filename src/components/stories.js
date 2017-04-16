import React from 'react'
import { View } from 'react-native'
import TopicFilter from './stories/topic-filter'
import List from './generic/list'
import Error from './generic/error'
import Story from './stories/story'

const Stories = ({
  viewIndex,
  error,
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
    <View>
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

export default Stories
