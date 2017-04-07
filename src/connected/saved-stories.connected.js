import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { loadStories, loadSavedStories, saveStory } from '../redux/action-creators/stories'
import Stories from '../containers/stories.container'

const StoriesWrapper = (props) => {
  const {
    loadStories,
    saveStory,
    stories,
    settings: { isSavedView, topics, savedStoryIds }
  } = props

  return (
    <Stories {...stories} loadStories={loadStories} topics={topics} saveStory={saveStory}/>
  )
}

const mapStateToProps = (s) => ({
  settings: s.settings,
  stories: s.stories
})

export default connect(mapStateToProps, {
  loadStories, loadSavedStories, saveStory
})(StoriesWrapper)
