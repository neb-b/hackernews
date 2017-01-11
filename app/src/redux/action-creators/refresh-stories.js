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

const getStories = (ids) => {
  const fetchId = (id) => fetch(`${ROOT_URL}/item/${id}.json`)
  return Promise.all(ids.slice(0, 60).map(fetchId))
    .then((responses) => (
      Promise.all(responses.map(res => res.json()))
    ))
}

export function refreshStories () {
  return (dispatch) => {
    dispatch(onRefreshStoriesRequest())

    fetch(`${ROOT_URL}/topstories.json`)
      .then((res) => res.json())
      .then((storiesIds) => getStories(storiesIds))
      .then((stories) => dispatch(onRefreshStoriesSuccess(stories)))
      .catch((err) => dispatch(onRefreshStoriesError(err)))
  }
}
