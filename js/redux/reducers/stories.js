import { handleActions } from 'redux-actions'
import {
	LOAD_SETTINGS_SUCCESS,
	FETCH_TOPIC_STORIES_REQUEST,
	FETCH_TOPIC_STORIES_SUCCESS,
	FETCH_TOPIC_STORIES_ERROR,
	SAVE_STORY_SUCCESS,
	UN_SAVE_STORY_SUCCESS,
	CHANGE_TOPIC_REQUEST,
	CHANGE_TOPIC_SUCCESS,
	CHANGE_TOPIC_ERROR,
	REFRESH_STORIES_REQUEST,
	REFRESH_STORIES_SUCCESS,
	REFRESH_STORIES_ERROR
} from '../constants'

const initialState = {
	loading: true,
	refreshing: false,
	error: null,
	stories: []
}

export default handleActions(
	{
		[LOAD_SETTINGS_SUCCESS]: (state, { payload }) => {
			const stories = payload.initialStories.stories || []
			const savedStories = payload.initialStories.savedStories || []

			const isSavedStory = storyIdInQuestion => {
				for (var i = 0; i < savedStories.length; i++) {
					if (savedStories[i].id === storyIdInQuestion) {
						return true
					}
				}
			}

			const storiesWithAttrs = stories.map(story => {
				if (isSavedStory(story.id)) {
					return Object.assign(story, { saved: true })
				} else {
					return story
				}
			})

			return {
				...state,
				loading: false,
				stories: storiesWithAttrs
			}
		},
		[FETCH_TOPIC_STORIES_REQUEST]: (state, { payload }) => ({
			...state,
			error: null
		}),
		[FETCH_TOPIC_STORIES_SUCCESS]: (state, { payload }) => {
			return {
				...state,
				loading: false,
				stories: payload.stories.map(story => {
					if (payload.savedStoryIds.indexOf(story.id) !== -1) {
						return Object.assign(story, { saved: true })
					}
					return story
				})
			}
		},
		[FETCH_TOPIC_STORIES_ERROR]: (state, { payload }) => {
			return {
				...state,
				loading: false,
				error: payload.err
			}
		},
		[SAVE_STORY_SUCCESS]: (state, { payload }) => {
			// load new storeis with correct "saved" attr
			const savedStories = payload.savedStoryIds
			const newStories = state.stories.map(story => {
				return story.id === payload.story.id
					? Object.assign(story, { saved: true })
					: story
			})
			return {
				...state,
				stories: newStories
			}
		},
		[UN_SAVE_STORY_SUCCESS]: (state, { payload }) => {
			const savedStories = payload.savedStoryIds
			const newStories = state.stories.map(story => {
				return story.id === payload.story.id
					? Object.assign(story, { saved: false })
					: story
			})
			return {
				...state,
				stories: newStories
			}
		},
		[CHANGE_TOPIC_REQUEST]: state => ({
			...state,
			loading: true,
			stories: []
		}),
		[CHANGE_TOPIC_SUCCESS]: (state, { payload: { stories } }) => ({
			...state,
			loading: false,
			stories
		}),
		[CHANGE_TOPIC_ERROR]: (state, { payload }) => ({
			...state,
			loading: false,
			error: payload
		}),
		[REFRESH_STORIES_REQUEST]: (state, { payload }) => ({
			...state,
			error: null,
			loading: false,
			refreshing: true
		}),
		[REFRESH_STORIES_SUCCESS]: (state, { payload: { newStories } }) => {
			return {
				...state,
				refreshing: false,
				stories: newStories
			}
		},
		[REFRESH_STORIES_ERROR]: (state, { payload }) => ({
			...state,
			loading: false,
			error: payload
		})
	},
	initialState
)
