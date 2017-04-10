import { AsyncStorage } from 'react-native'
import { createAction } from 'redux-actions'
import {
  FETCH_TOPIC_STORIES_REQUEST,
  FETCH_TOPIC_STORIES_SUCCESS,
  FETCH_TOPIC_STORIES_ERROR,

  FETCH_SAVED_STORIES_REQUEST,
  FETCH_SAVED_STORIES_SUCCESS,
  FETCH_SAVED_STORIES_ERROR,

  SAVE_STORY_SUCCESS,
  SAVE_STORY_ERROR,

  UN_SAVE_STORY_SUCCESS,
  UN_SAVE_STORY_ERROR
} from '../constants'
import { getJson } from './fetch-builder'

const onFetchSelectedStoriesRequest = createAction(FETCH_TOPIC_STORIES_REQUEST)
const onFetchSelectedStoriesSuccess = createAction(FETCH_TOPIC_STORIES_SUCCESS)
const onFetchSelectedStoriesError = createAction(FETCH_TOPIC_STORIES_ERROR)

const onFetchSavedStoriesRequest = createAction(FETCH_SAVED_STORIES_REQUEST)
const onFetchSavedStoriesSuccess = createAction(FETCH_SAVED_STORIES_SUCCESS)
const onFetchSavedStoriesError = createAction(FETCH_SAVED_STORIES_ERROR)

const onSaveStorySuccess = createAction(SAVE_STORY_SUCCESS)
const onSaveStoryError = createAction(SAVE_STORY_ERROR)

const onUnSaveStorySuccess = createAction(UN_SAVE_STORY_SUCCESS)
const onUnSaveStoryError = createAction(UN_SAVE_STORY_ERROR)


export function loadStories (selectedTopic, savedStoryIds) {
  return (dispatch) => {
    dispatch(onFetchSelectedStoriesRequest())
    getJson('stories', selectedTopic)
      .then((stories) => dispatch(onFetchSelectedStoriesSuccess({ stories, savedStoryIds })))
      .catch((err) => dispatch(onFetchSelectedStoriesError({err})))
  }
}

export function loadSavedStories (stories) {
  const query = `?stories=${stories.join(',')}`
  return (dispatch) => {
    dispatch(onFetchSavedStoriesRequest())
    getJson('saved', query)
      .then((stories) => dispatch(onFetchSavedStoriesSuccess({ stories })))
      .catch((err) => dispatch(onFetchSavedStoriesError({err})))
  }
}

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
  console.log('setting savedSTories', stories);
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
  console.log('unsave');
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
