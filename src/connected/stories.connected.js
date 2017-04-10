import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { saveStory, unSaveStory } from '../redux/action-creators/stories'
import Stories from '../components/stories'

const StoriesWrapper = (props) => {
  const {
    saveStory,
    unSaveStory,
    stories,
    navigator,
    settings: { isSavedView, topics, savedStoryIds }
  } = props

  return (
    <Stories
      {...stories}
      topics={topics}
      unSaveStory={unSaveStory}
      saveStory={saveStory}
      navigator={navigator} />
  )
}

const mapStateToProps = (s) => ({
  settings: s.settings,
  stories: s.stories
})

export default connect(mapStateToProps, {
  saveStory, unSaveStory
})(StoriesWrapper)
