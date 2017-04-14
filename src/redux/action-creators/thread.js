import { AsyncStorage } from 'react-native'
import { createAction } from 'redux-actions'
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR
} from '../constants'
import { getJson } from './fetch-builder'

const onFetchCommentsRequest = createAction(FETCH_COMMENTS_REQUEST)
const onFetchCommentsSuccess = createAction(FETCH_COMMENTS_SUCCESS)
const onFetchCommentsError = createAction(FETCH_COMMENTS_ERROR)


export function loadComments (commentIds, head) {
  return (dispatch) => {
    const query = `comments=${commentIds.join(',')}`

    dispatch(onFetchCommentsRequest({head: head}))
    getJson('comments', null, query)
      .then((comments) => dispatch(onFetchCommentsSuccess(comments)))
      .catch((err) => dispatch(onFetchCommentsError({err})))
  }
}
