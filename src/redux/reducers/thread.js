import { handleActions } from 'redux-actions'
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
} from '../constants'

const initialState = {
  loading: true,
  refreshing: false,
  error: null,
  comments: []
}

export default handleActions({
  FETCH_COMMENTS_REQUEST: (state) => {
    return ({
      ...state,
      error: null,
      comments: []
    })
  },
  FETCH_COMMENTS_SUCCESS: (state, {payload}) => {
    return ({
      ...state,
      error: null,
      loading: false,
      comments: payload.comments
    })
  },
  FETCH_COMMENTS_ERROR: (state, {payload}) => {
    return ({
      ...state,
      error: payload.err
    })
  },
  REFRESH_THREAD_REQUEST: (state, {payload}) => ({
    ...state,
    loading: false,
    refreshing: true
  }),
  REFRESH_THREAD_SUCCESS: (state, {payload: {comments}}) => ({
    ...state,
    refreshing: false,
    comments
  }),
  REFRESH_THREAD_ERROR: (state, {payload}) => ({
    ...state,
    loading: false,
    error: payload
  })
}, initialState)
