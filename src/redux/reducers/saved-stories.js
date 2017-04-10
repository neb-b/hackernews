import { handleActions } from 'redux-actions'
import {
  LOAD_SETTINGS_SUCCESS,
  FETCH_SAVED_STORIES_REQUEST,
  FETCH_SAVED_STORIES_SUCCESS,
  FETCH_SAVED_STORIES_ERROR,
  SAVE_STORY_SUCCESS,
  UN_SAVE_STORY_SUCCESS
} from '../constants'

const initialState = {
  loading: false,
  error: null,
  savedStories: []
}

export default handleActions({
  LOAD_SETTINGS_SUCCESS: (state, {payload}) => {
    const savedStories = payload.initialStories.savedStories || []
    const newStories = payload.initialStories.savedStories.map((story) => Object.assign(story, { saved: true }))

    return ({
      ...state,
      loading: false,
      savedStories: newStories
    })
  },
  FETCH_SAVED_STORIES_REQUEST: (state, {payload}) => ({...state, error: null, loading: true}),
  FETCH_SAVED_STORIES_SUCCESS: (state, {payload}) => {
    return ({
      ...state,
      loading: false,
      savedStories: payload.stories.map((story) => Object.assign(story, { saved: true }))
    })
  },
  FETCH_SAVED_STORIES_ERROR: (state, {payload}) => {
    return ({
      ...state,
      loading: false,
      error: payload.error
    })
  },
  SAVE_STORY_SUCCESS: (state, {payload}) => {
    return ({
      ...state,
      savedStories: state.savedStories.concat([payload.story])
    })
  },
  UN_SAVE_STORY_SUCCESS: (state, {payload}) => {
    const newStories = state.savedStories.filter((story) => {
      return story.id !== payload.story.id
    })
    return ({
      ...state,
      savedStories: newStories
    })
  }
}, initialState)
