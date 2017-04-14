import { handleActions } from 'redux-actions'
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
} from '../constants'

const initialState = {
  loading: true,
  error: null,
  comments: []
}

export default handleActions({
  FETCH_COMMENTS_REQUEST: (state) => {
    return ({
      ...state,
      error: null
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
}, initialState)
