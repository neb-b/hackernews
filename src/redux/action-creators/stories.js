import { AsyncStorage } from 'react-native'
import { createAction } from 'redux-actions'
import {
  SAVE_STORY_SUCCESS,
  SAVE_STORY_ERROR,
  UN_SAVE_STORY_SUCCESS,
  UN_SAVE_STORY_ERROR
} from '../constants'
import { getJson } from './fetch-builder'

const onSaveStorySuccess = createAction(SAVE_STORY_SUCCESS)
const onSaveStoryError = createAction(SAVE_STORY_ERROR)

const onUnSaveStorySuccess = createAction(UN_SAVE_STORY_SUCCESS)
const onUnSaveStoryError = createAction(UN_SAVE_STORY_ERROR)

const getSavedStories = () => {
  return AsyncStorage.getItem('savedStories')
    .then((savedStoriesRes) => {
      const savedStories = savedStoriesRes && JSON.parse(savedStoriesRes) || []
      return savedStories
    })
}

const setSavedStories = (dispatch, stories, story, unSaving) => {
  const toggleSaveAction = unSaving ? onUnSaveStorySuccess : onSaveStorySuccess
  const toggleSaveActionErr = unSaving ? onUnSaveStoryError : onSaveStoryError
  AsyncStorage.setItem('savedStories', JSON.stringify(stories))
    .then(() => dispatch(toggleSaveAction({storyIds: stories, story})))
    .catch((err) => dispatch(toggleSaveActionErr(err)))
}

export function saveStory (story) {
  return (dispatch) => {
    getSavedStories()
      .then((stories) => {
        if (!stories.length) {
          return setSavedStories(dispatch, [story.id], story)
        }

        const newStories = stories.concat([story.id])
        setSavedStories(dispatch, newStories, story)
      })
    }
}

export function unSaveStory (story) {
  return (dispatch) => {
    getSavedStories()
      .then((stories) => {
        const newStories = stories.filter((storyId) => {
          return storyId !== story.id
        })
        return setSavedStories(dispatch, newStories, story, true)
      })
    }
}
