import { createAction } from 'redux-actions'
import {
  LOAD_STORIES_REQUEST,
  LOAD_STORIES_SUCCESS,
  LOAD_STORIES_ERROR,
  REFRESH_STORIES_REQUEST,
  REFRESH_STORIES_SUCCESS,
  REFRESH_STORIES_ERROR,
  ROOT_URL
} from '../constants'

const onLoadStoriesRequest = createAction(LOAD_STORIES_REQUEST)
const onLoadStoriesSuccess = createAction(LOAD_STORIES_SUCCESS)
const onLoadStoriesError = createAction(LOAD_STORIES_ERROR)

const onRefreshStoriesRequest = createAction(REFRESH_STORIES_REQUEST)
const onRefreshStoriesSuccess = createAction(REFRESH_STORIES_SUCCESS)
const onRefreshStoriesError = createAction(REFRESH_STORIES_ERROR)

export function loadStories (endpoint) {
  // console.log('load stories action', endpoint);
  return (dispatch) => {
    // console.log('about to start');
    dispatch(onLoadStoriesRequest())

    fetch(`${ROOT_URL}/stories/${endpoint}`)
      .then((res) => res.json())
      .then((stories) => dispatch(onLoadStoriesSuccess(stories)))
      .catch((err) => dispatch(onLoadStoriesError(err)))
  }
}

export function refreshStories (endpoint) {
  return (dispatch) => {
    dispatch(onRefreshStoriesRequest())

    fetch(`${ROOT_URL}/stories/${endpoint}`)
      .then((res) => res.json())
      .then((stories) => dispatch(onRefreshStoriesSuccess(stories)))
      .catch((err) => dispatch(onRefreshStoriesError(err)))
  }
}
