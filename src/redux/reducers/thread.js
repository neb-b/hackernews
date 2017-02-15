import { handleActions } from 'redux-actions'
import {
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_ERROR,
  REFRESH_THREAD_REQUEST,
  REFRESH_THREAD_SUCCESS,
  REFRESH_THREAD_ERROR,
  TOGGLE_COMMENT
} from '../constants'
import { appendReplies, toggleViewComment } from '../../helpers/comment-helpers'

const initialState = {
  loading: true,
  refreshing: false,
  error: null,
  comments: []
}

export default handleActions({
  LOAD_COMMENTS_REQUEST: (state) => ({
    ...state,
    loading: true,
    refresing:false,
    error: null
  }),
  LOAD_COMMENTS_SUCCESS: (state, { payload }) => ({
    ...state,
    loading: false,
    comments: payload.map((comment) => (
      Object.assign(
        comment, {
          showComment: true,
          commentChain: [comment.id]
        }))
    )
  }),
  LOAD_COMMENTS_ERROR: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload
  }),

  LOAD_SUB_COMMENTS_REQUEST: (state, { payload }) => ({
    ...state,
    error: null,
    loadingSubComments: true,
    commentThatsLoading: payload
  }),
  LOAD_SUB_COMMENTS_SUCCESS: (state, { payload: { commentChain, comments } }) => {
    const newComments = appendReplies(state.comments, commentChain, comments)
    return {
      ...state,
      comments: newComments,
      loadingSubComments: false,
      commentThatsLoading: null
    }
  },
  LOAD_SUB_COMMENTS_ERROR: (state, { payload }) => ({
    ...state,
    loadingSubComments: false,
    error: payload
  }),

  TOGGLE_COMMENT: (state, { payload: { id, commentChain }  }) => {
    const newComments = toggleViewComment(state.comments, commentChain, id)
    return {
      ...state,
      comments: newComments
    }
  },

  REFRESH_THREAD_REQUEST: (state) => ({
    ...state,
    refreshing: true
  }),
  REFRESH_THREAD_SUCCESS: (state, { payload }) => ({
    ...state,
    refreshing: false,
    comments: payload.map((comment) => (
      Object.assign(
        comment, {
          showComment: true,
          commentChain: [comment.id]
        }))
    )
  }),
  REFRESH_THREAD_ERROR: (state, { payload }) => ({
    ...state,
    loading: false,
    refreshing: false,
    error: payload
  }),
}, initialState)
