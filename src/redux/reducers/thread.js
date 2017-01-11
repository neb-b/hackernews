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
  comments: [],
  loadingSubComments: null //
}

export default handleActions({
  LOAD_COMMENTS_REQUEST: (state) => ({...state, loading: true}),
  LOAD_COMMENTS_SUCCESS: (state, { payload }) => ({
    ...state,
    loading: false,
    comments: payload
  }),
  LOAD_COMMENTS_ERROR: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload
  }),

  LOAD_SUB_COMMENTS_REQUEST: (state, { payload }) => ({
    ...state,
    loadingSubComments: true,
    subCommentsParent: payload
  }),
  LOAD_SUB_COMMENTS_SUCCESS: (state, { payload }) => {
    const subComments = payload
    const parent = subComments[0].parent

    state.comments.forEach((comment) => {
      if (comment.id === parent) {
        comment.subComments = subComments
      }
    })

    return {
      ...state,
      loadingSubComments: false,
      comments: newComments
    }
  },
  LOAD_SUB_COMMENTS_ERROR: (state, { payload }) => ({
    ...state,
    loadingSubComments: false,
    error: payload
  })

}, initialState)
