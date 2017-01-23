import { createAction } from 'redux-actions'
import {
  REFRESH_STORIES_REQUEST,
  REFRESH_STORIES_SUCCESS,
  REFRESH_STORIES_ERROR,
  ROOT_URL
} from '../constants'

const onRefreshStoriesRequest = createAction(REFRESH_STORIES_REQUEST)
const onRefreshStoriesSuccess = createAction(REFRESH_STORIES_SUCCESS)
const onRefreshStoriesError = createAction(REFRESH_STORIES_ERROR)

export function refreshStories () {
  return (dispatch) => {
    dispatch(onRefreshStoriesRequest())

    fetch(`${ROOT_URL}/stories/top`)
      .then((res) => res.json())
      .then((stories) => dispatch(onRefreshStoriesSuccess(stories)))
      .catch((err) => dispatch(onRefreshStoriesError(err)))
  }
}
