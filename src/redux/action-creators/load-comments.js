import { createAction } from 'redux-actions'
import {
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_ERROR,
  ROOT_URL
} from '../constants'

const onLoadCommentsRequest = createAction(LOAD_COMMENTS_REQUEST)
const onLoadCommentsSuccess = createAction(LOAD_COMMENTS_SUCCESS)
const onLoadCommentsError = createAction(LOAD_COMMENTS_ERROR)

const getComments = (ids) => {
  const fetchId = (id) => fetch(`${ROOT_URL}/item/${id}.json`)
  return Promise.all(ids.map(fetchId))
    .then((responses) => (
      Promise.all(responses.map(res => res.json()))
    ))
}

export function loadComments (commentIds) {
  return (dispatch) => {
    dispatch(onLoadCommentsRequest())

    getComments(commentIds)
      .then((comments) => dispatch(onLoadCommentsSuccess(comments)))
      .catch((err) => dispatch(onLoadCommentsError(err)))
  }
}
