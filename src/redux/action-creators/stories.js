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
  SAVE_STORY_ERROR
} from '../constants'
import { getJson } from './fetch-builder'

const onFetchSelectedStoriesRequest = createAction(FETCH_TOPIC_STORIES_REQUEST)
const onFetchSelectedStoriesSuccess = createAction(FETCH_TOPIC_STORIES_SUCCESS)
const onFetchSelectedStoriesError = createAction(FETCH_TOPIC_STORIES_ERROR)

const onSaveStorySuccess = createAction(SAVE_STORY_SUCCESS)
const onSaveStoryError = createAction(SAVE_STORY_ERROR)


export function loadStories (selectedTopic) {
  return (dispatch) => {
    dispatch(onFetchSelectedStoriesRequest())
      getJson(selectedTopic)
        .then((stories) => dispatch(onFetchSelectedStoriesSuccess({ stories })))
        .catch((err) => dispatch(onFetchSelectedStoriesError(err)))
  }
}

export function loadSavedStories () {
  return (dispatch) => {
    dispatch(onFetchSavedStoriesRequest())
    setTimeout(() => {
      dispatch(onFetchSelectedStoriesSuccess({stories: [{hello: 'world'}]}))
    }, 2000)
  }
}


export function saveStory (story) {
  return (dispatch) => {
    const getSavedStories = () => {
      console.log('getSavedStories');
      return AsyncStorage.getItem('savedStories')
        .then((savedStoriesRes) => {
          console.log('get res', savedStoriesRes)
          const savedStories = savedStoriesRes && JSON.parse(savedStoriesRes) || []
          return savedStories
        })
    }

    const setSavedStories = (stories) => {
      AsyncStorage.setItem('savedStories', JSON.stringify(stories))
        .then(() => dispatch(onSaveStorySuccess()))
        .catch((err) => dispatch(onSaveStoryError(err)))
    }


    getSavedStories()
      .then((stories) => {
        if (!stories.length) {
          return setSavedStories([story.id])
        }

        const newStories = stories.concat([story.id])
        setSavedStories(newStories)
      })
    }
}
