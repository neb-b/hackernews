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
  loading: false,
  refreshing: false,
  error: null,
  stories: [{
    title: "This is a news title",
    time: Date.now(),
    score: Math.floor(Math.random() * 100),
    descendants: 20,
    url: "https://www.google.com"
  },
  {
    title: "This is a slightly longer, and more imformative news title",
    time: Date.now(),
    score: Math.floor(Math.random() * 100),
    descendants: 20,
    url: "https://www.google.com"
  },
  {
    title: "Short title",
    time: Date.now(),
    score: Math.floor(Math.random() * 100),
    descendants: 20,
    url: "https://www.google.com"
  }
]
}

export default handleActions({
  LOAD_STORIES_REQUEST: (state) => ({...state}),
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

  REFRESH_STORIES_REQUEST: (state) => ({ ...state, refreshing: true, loading: false}),
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
