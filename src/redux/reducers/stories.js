import { handleActions } from 'redux-actions'
import {
  LOAD_STORIES_REQUEST,
  LOAD_STORIES_SUCCESS,
  LOAD_STORIES_ERROR,
  REFRESH_STORIES_REQUEST,
  REFRESH_STORIES_SUCCESS,
  REFRESH_STORIES_ERROR
} from '../constants'

const initialState = {
  loading: true,
  refreshing: false,
  error: null,
  stories: []
}

export default handleActions({
  LOAD_STORIES_REQUEST: (state) => ({...state, loading: true }),
  LOAD_STORIES_SUCCESS: (state, { payload }) => ({
    ...state,
    loading: false,
    error: null,
    stories: payload
  }),
  LOAD_STORIES_ERROR: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload
  }),

  REFRESH_STORIES_REQUEST: (state) => ({
    ...state,
    refreshing: true,
    loading: false
  }),
  REFRESH_STORIES_SUCCESS: (state, { payload }) => ({
    ...state,
    refreshing: false,
    error: null,
    stories: payload
  }),
  REFRESH_STORIES_ERROR: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload
  }),
}, initialState)
