import { AsyncStorage } from 'react-native'
import { createAction } from 'redux-actions'
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
  REFRESH_THREAD_REQUEST,
  REFRESH_THREAD_SUCCESS,
  REFRESH_THREAD_ERROR
} from '../constants'
import { getJson } from './fetch-builder'

const onFetchCommentsRequest = createAction(FETCH_COMMENTS_REQUEST)
const onFetchCommentsSuccess = createAction(FETCH_COMMENTS_SUCCESS)
const onFetchCommentsError = createAction(FETCH_COMMENTS_ERROR)
const onRefreshThreadRequest = createAction(REFRESH_THREAD_REQUEST)
const onRefreshThreadSuccess = createAction(REFRESH_THREAD_SUCCESS)
const onRefreshThreadError = createAction(REFRESH_THREAD_ERROR)


export function loadComments (commentIds, head) {
  const query = `comments=${commentIds.join(',')}`

  return (dispatch) => {
    dispatch(onFetchCommentsRequest({head}))
    getJson('comments', null, query)
      .then((comments) => dispatch(onFetchCommentsSuccess(comments)))
      .catch((err) => dispatch(onFetchCommentsError({err})))
  }
}

export function refreshThread (commentIds, head) {
  const query = `comments=${commentIds.join(',')}`

  return (dispatch) => {
    dispatch(onRefreshThreadRequest({head}))

    getJson('comments', null, query)
      .then(({ comments }) => {
        dispatch(onRefreshThreadSuccess({comments}))
      })
      .catch((err) => dispatch(onRefreshThreadError(err)))
  }
}
