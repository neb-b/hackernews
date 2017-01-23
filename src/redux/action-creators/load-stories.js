import { createAction } from 'redux-actions'
import {
  LOAD_STORIES_REQUEST,
  LOAD_STORIES_SUCCESS,
  LOAD_STORIES_ERROR,
  ROOT_URL
} from '../constants'

const onLoadStoriesRequest = createAction(LOAD_STORIES_REQUEST)
const onLoadStoriesSuccess = createAction(LOAD_STORIES_SUCCESS)
const onLoadStoriesError = createAction(LOAD_STORIES_ERROR)

export function loadStories () {
  return (dispatch) => {
    dispatch(onLoadStoriesRequest())

    fetch(`${ROOT_URL}/stories/top`)
      .then((res) => res.json())
      .then((stories) => dispatch(onLoadStoriesSuccess(stories)))
      .catch((err) => dispatch(onLoadStoriesError(err)))
  }
}
