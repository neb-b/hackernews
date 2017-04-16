import { handleActions } from 'redux-actions'
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
  REFRESH_THREAD_REQUEST,
  REFRESH_THREAD_SUCCESS,
  REFRESH_THREAD_ERROR,
  FETCH_REPLIES_REQUEST,
  FETCH_REPLIES_SUCCESS,
  FETCH_REPLIES_ERROR,
  TOGGLE_COMMENT
} from '../constants'
import { toggleViewComment, appendReplies } from '../../helpers/comment-helpers'


const initialState = {
  loading: true,
  refreshing: false,
  error: null,
  fetchingReplies: false,
  fetchingRepliesFor: null,
  comments: []
}

export default handleActions({
  [FETCH_COMMENTS_REQUEST]: (state) => {
    return ({
      ...state,
      error: null,
      comments: []
    })
  },
  [FETCH_COMMENTS_SUCCESS]: (state, {payload: {comments}}) => {
    return ({
      ...state,
      error: null,
      loading: false,
      comments: comments.map((comment) => Object.assign({}, comment, { commentChain: [comment.id], showComment: true }))
    })
  },
  [FETCH_COMMENTS_ERROR]: (state, {payload}) => {
    return ({
      ...state,
      error: payload.err
    })
  },
  [REFRESH_THREAD_REQUEST]: (state, {payload}) => ({
    ...state,
    loading: false,
    refreshing: true
  }),
  [REFRESH_THREAD_SUCCESS]: (state, {payload: {comments}}) => ({
    ...state,
    refreshing: false,
    comments
  }),
  [REFRESH_THREAD_ERROR]: (state, {payload}) => ({
    ...state,
    loading: false,
    error: payload
  }),
  [FETCH_REPLIES_REQUEST]: (state, {payload: {opId}}) => ({
    ...state,
    fetchingReplies: true,
    fetchingRepliesFor: opId
  }),
  [FETCH_REPLIES_SUCCESS]: (state, {payload: {comments: replies, commentChain}}) => {
    return ({
      ...state,
      loading: false,
      fetchingReplies: false,
      fetchingRepliesFor: null,
      comments: appendReplies(state.comments, commentChain, replies)
    })
  }
  ,
  [FETCH_REPLIES_ERROR]: (state, {payload}) => ({
    ...state,
    loading: false,
    error: payload
  }),
  [TOGGLE_COMMENT]: (state, { payload: { id, commentChain }  }) => ({
    ...state,
    comments: toggleViewComment(state.comments, commentChain, id)
  }),
}, initialState)
