import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { saveStory, unSaveStory } from '../redux/action-creators/stories'
import SavedStories from '../components/saved-stories'

const SavedStoriesWrapper = (props) => {
  const {
    unSaveStory,
    saveStory,
    loadSavedStories,
    savedStories,
    navigator,
    settings: { isSavedView, topics, savedStoryIds }
  } = props

  if (savedStories.length) {
    return (
      <SavedStories
        savedStories={savedStories}
        savedStoryIds={savedStoryIds}
        unSaveStory={unSaveStory}
        saveStory={saveStory}
        navigator={navigator} />
      )
  } else {
    return (<Text>No Saved Stories</Text>)
  }
}

const mapStateToProps = (s) => ({
  settings: s.settings,
  ...s.savedStories
})

export default connect(mapStateToProps, {
  saveStory, unSaveStory
})(SavedStoriesWrapper)
