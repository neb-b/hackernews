import { handleActions } from 'redux-actions'
import {
  FETCH_SAVED_STORIES_REQUEST,
  FETCH_SAVED_STORIES_SUCCESS,
  FETCH_SAVED_STORIES_ERROR
} from '../constants'

const initialState = {
  loading: false,
  error: null,
  savedStories: []
}

export default handleActions({
  FETCH_SAVED_STORIES_REQUEST: (state, {payload}) => ({...state, error: null, loading: true}),
  FETCH_SAVED_STORIES_SUCCESS: (state, {payload}) => {
    return ({
      ...state,
      loading: false,
      savedStories: payload.savedStories
    })
  },
  FETCH_SAVED_STORIES_ERROR: (state, {payload}) => {
    return ({
      ...state,
      loading: false,
      error: payload.error
    })
  },
}, initialState)
