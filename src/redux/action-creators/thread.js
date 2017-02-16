import { createAction } from 'redux-actions'
import {
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_ERROR,
  LOAD_SUB_COMMENTS_REQUEST,
  LOAD_SUB_COMMENTS_SUCCESS,
  LOAD_SUB_COMMENTS_ERROR,
  REFRESH_THREAD_REQUEST,
  REFRESH_THREAD_SUCCESS,
  REFRESH_THREAD_ERROR,
  TOGGLE_COMMENT,
  ROOT_URL
} from '../constants'
import { postJson } from '../../helpers/fetch-builder'
const URL = `${ROOT_URL}/comments`

const onLoadCommentsRequest = createAction(LOAD_COMMENTS_REQUEST)
const onLoadCommentsSuccess = createAction(LOAD_COMMENTS_SUCCESS)
const onLoadCommentsError = createAction(LOAD_COMMENTS_ERROR)

const onLoadSubCommentsRequest = createAction(LOAD_SUB_COMMENTS_REQUEST)
const onLoadSubCommentsSuccess = createAction(LOAD_SUB_COMMENTS_SUCCESS)
const onLoadSubCommentsError = createAction(LOAD_SUB_COMMENTS_ERROR)

const onRefreshThreadRequest = createAction(REFRESH_THREAD_REQUEST)
const onRefreshThreadSuccess = createAction(REFRESH_THREAD_SUCCESS)
const onRefreshThreadError = createAction(REFRESH_THREAD_ERROR)

const onToggleComment = createAction(TOGGLE_COMMENT)

export function loadComments (commentIds) {
  return (dispatch) => {
    dispatch(onLoadCommentsRequest())

    postJson(URL, commentIds)
      .then(({ comments }) => dispatch(onLoadCommentsSuccess(comments)))
      .catch((err) => dispatch(onLoadCommentsError(err)))
  }
}

export function loadSubComments (id, commentChain, kids) {
  return (dispatch) => {
    dispatch(onLoadSubCommentsRequest(id))

    postJson(URL, kids)
      .then(({ comments }) => dispatch(onLoadSubCommentsSuccess({commentChain, comments: comments.map((comment) => Object.assign(comment, { commentChain }))})))
      .catch((err) => dispatch(onLoadSubCommentsError(err)))
  }
}

export function refreshThread (comments) {
  const trimmedComments = comments.map((comment) => comment.id)

  return (dispatch) => {
    dispatch(onRefreshThreadRequest())

    postJson(URL, trimmedComments)
      .then(({ comments }) => dispatch(onRefreshThreadSuccess(comments)))
      .catch((err) => dispatch(onRefreshThreadError(err)))
  }
}

export function toggleComment (id, commentChain) {
  return (dispatch) => {
    dispatch(onToggleComment({id, commentChain}))
  }
}
