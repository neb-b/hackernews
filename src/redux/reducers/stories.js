import { handleActions } from 'redux-actions'
import {
  FETCH_TOPIC_STORIES_REQUEST,
  FETCH_TOPIC_STORIES_SUCCESS,
  FETCH_TOPIC_STORIES_ERROR,

  SAVE_STORY_SUCCESS,
  SAVE_STORY_ERROR
} from '../constants'

const initialState = {
  loading: true,
  error: null,
  stories: []
}

export default handleActions({
  FETCH_TOPIC_STORIES_REQUEST: (state, {payload}) => ({
    ...state,
    error: null
  }),
  FETCH_TOPIC_STORIES_SUCCESS: (state, {payload}) => {
    return ({
      ...state,
      loading: false,
      stories: payload.stories
    })
  },
  FETCH_TOPIC_STORIES_ERROR: (state, {payload}) => {
    return ({
      ...state,
      loading: false,
      error: payload.error
    })
  },
  SAVE_STORY_SUCCESS: (state, {payload}) => {
    return ({
      ...state
    })
  },
  SAVE_STORY_ERROR: (state, {payload}) => {
    return ({
      ...state
    })
  }
}, initialState)
