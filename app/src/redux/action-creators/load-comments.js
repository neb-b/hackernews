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
const URL = `${ROOT_URL}/comments`

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
  .then((res) => {
    console.log('RESPONSE');
    return res
  })
  .then((res) => res.json())
)

export function loadComments (commentIds) {
  return (dispatch) => {
    dispatch(onLoadCommentsRequest())

    fetchBuilder(URL, commentIds)
      .then(({ comments }) => dispatch(onLoadCommentsSuccess(comments)))
      .catch((err) => dispatch(onLoadCommentsError(err)))
  }
}

export function loadSubComments (id, parents, kids) {
  let commentChain
  if (parents && parents.length) {
    commentChain = parents.slice()
    commentChain.push(id)
    console.log('maybe?!!!', commentChain);
  } else {
    commentChain = [id]
  }
  console.log('commentChain', commentChain);

  return (dispatch) => {
    dispatch(onLoadSubCommentsRequest(commentChain))

    fetchBuilder(URL, kids)
      .then(({ comments }) => dispatch(onLoadSubCommentsSuccess({commentChain, comments})))
      .catch((err) => dispatch(onLoadSubCommentsError(err)))
  }
}
