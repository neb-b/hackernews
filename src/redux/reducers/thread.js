import { handleActions } from 'redux-actions'
import {
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_ERROR,
  // REFRESH_COMMENTS_REQUEST,
  // REFRESH_COMMENTS_SUCCESS,
  // REFRESH_COMMENTS_ERROR
} from '../constants'

const initialState = {
  loading: true,
  refreshing: false,
  error: null,
  comments: []
}

export default handleActions({
  LOAD_COMMENTS_REQUEST: (state) => ({...state, loading: true}),
  LOAD_COMMENTS_SUCCESS: (state, { payload }) => ({
    ...state,
    loading: false,
    error: null,
    comments: payload
  }),
  LOAD_COMMENTS_ERROR: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload
  }),

  // REFRESH_COMMENTS_REQUEST: (state) => ({ ...state, refreshing: true, loading: false}),
  // REFRESH_COMMENTS_SUCCESS: (state, { payload }) => ({
  //   ...state,
  //   refreshing: false,
  //   error: null,
  //   stories: payload
  // }),
  // REFRESH_COMMENTS_ERROR: (state, { payload }) => ({
  //   ...state,
  //   loading: false,
  //   error: payload
  // }),
}, initialState)
