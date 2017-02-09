import { createAction } from 'redux-actions'
import {
  REFRESH_THREAD_REQUEST,
  REFRESH_THREAD_SUCCESS,
  REFRESH_THREAD_ERROR,
  ROOT_URL
} from '../constants'
import { fetchBuilder } from '../../helpers/fetch-builder'

const URL = `${ROOT_URL}/comments`

const onRefreshThreadRequest = createAction(REFRESH_THREAD_REQUEST)
const onRefreshThreadSuccess = createAction(REFRESH_THREAD_SUCCESS)
const onRefreshThreadError = createAction(REFRESH_THREAD_ERROR)

export function refreshThread (comments) {
  const trimmedComments = comments.map((comment) => comment.id)
  
  return (dispatch) => {
    dispatch(onRefreshThreadRequest())

    fetchBuilder(URL, trimmedComments)
      .then(({ comments }) => dispatch(onRefreshThreadSuccess(comments)))
      .catch((err) => dispatch(onRefreshThreadError(err)))
  }
}
