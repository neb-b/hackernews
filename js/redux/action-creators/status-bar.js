import { createAction } from 'redux-actions'
import {
	TOGGLE_FILTER,
	CHANGE_TOPIC,
	LOAD_STORIES_REQUEST,
	LOAD_STORIES_SUCCESS,
	LOAD_STORIES_ERROR,
	ROOT_URL
} from '../constants'

const onToggleFilter = createAction(TOGGLE_FILTER)
const onChangeTopic = createAction(CHANGE_TOPIC)

const onLoadStoriesRequest = createAction(LOAD_STORIES_REQUEST)
const onLoadStoriesSuccess = createAction(LOAD_STORIES_SUCCESS)
const onLoadStoriesError = createAction(LOAD_STORIES_ERROR)

export function toggleFilter() {
	return dispatch => {
		dispatch(onToggleFilter())
	}
}

export function changeTopic(newTopic) {
	return dispatch => {
		dispatch(onChangeTopic(newTopic))
		dispatch(onLoadStoriesRequest())

		fetch(`${ROOT_URL}/stories/${newTopic.endpoint}`)
			.then(res => res.json())
			.then(stories => dispatch(onLoadStoriesSuccess(stories)))
			.catch(err => dispatch(onLoadStoriesError(err)))
	}
}
