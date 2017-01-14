import { createAction } from 'redux-actions'
import {
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_ERROR,
  LOAD_SUB_COMMENTS_REQUEST,
  LOAD_SUB_COMMENTS_SUCCESS,
  LOAD_SUB_COMMENTS_ERROR,
  ROOT_URL
} from '../constants'

const onLoadCommentsRequest = createAction(LOAD_COMMENTS_REQUEST)
const onLoadCommentsSuccess = createAction(LOAD_COMMENTS_SUCCESS)
const onLoadCommentsError = createAction(LOAD_COMMENTS_ERROR)

const onLoadSubCommentsRequest = createAction(LOAD_SUB_COMMENTS_REQUEST)
const onLoadSubCommentsSuccess = createAction(LOAD_SUB_COMMENTS_SUCCESS)
const onLoadSubCommentsError = createAction(LOAD_SUB_COMMENTS_ERROR)

const fetchBuilder = (url, commentIds) => (
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ commentIds })
  })
  .then((res) => res.json())
)

export function loadComments (commentIds) {
  const url = `${ROOT_URL}/comments`

  return (dispatch) => {
    dispatch(onLoadCommentsRequest())

    fetchBuilder(url, commentIds)
      .then(({ comments }) => dispatch(onLoadCommentsSuccess(comments)))
      .catch((err) => dispatch(onLoadCommentsError(err)))
  }
}

export function loadSubComments (parentId, commentIds) {
  const url = `${ROOT_URL}/comments/replies`

  return (dispatch) => {
    dispatch(onLoadSubCommentsRequest(parentId))

    fetchBuilder(url, commentIds)
      .then(({ comments }) => dispatch(onLoadSubCommentsSuccess(comments)))
      .catch((err) => dispatch(onLoadSubCommentsError(err)))
  }
}
