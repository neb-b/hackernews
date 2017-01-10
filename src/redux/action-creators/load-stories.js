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

const getStories = (ids) => {
  const fetchId = (id) => fetch(`${ROOT_URL}/item/${id}.json`)
  return Promise.all(ids.slice(0, 20).map(fetchId))
    .then((responses) => (
      Promise.all(responses.map(res => res.json()))
    ))
}

export function loadStories () {
  return (dispatch) => {
    dispatch(onLoadStoriesRequest())

    fetch(`${ROOT_URL}/topstories.json`)
      .then((res) => res.json())
      .then((storiesIds) => getStories(storiesIds))
      .then((stories) => dispatch(onLoadStoriesSuccess(stories)))
      .catch((err) => dispatch(onLoadStoriesError(err)))
  }
}
