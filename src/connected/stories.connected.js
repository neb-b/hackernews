import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { loadStories, loadSavedStories, saveStory } from '../redux/action-creators/stories'
import SavedStories from '../containers/saved-stories.container'

const SavedStoriesWrapper = (props) => {
  const {
    saveStory,
    loadSavedStories,
    savedStories,
    settings: { isSavedView, topics, savedStoryIds }
  } = props

  return (
    <SavedStories {...savedStories} savedStoryIds={savedStoryIds} loadSavedStories={loadSavedStories}/>
  )
}

const mapStateToProps = (s) => ({
  settings: s.settings,
  savedStories: s.savedStories
})

export default connect(mapStateToProps, {
  loadStories, loadSavedStories, saveStory
})(SavedStoriesWrapper)
