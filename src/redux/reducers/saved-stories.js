import { handleActions } from 'redux-actions'

const initialState = {
  loading: false,
  refreshing: false,
  error: null,
  savedStories: []
}

export default handleActions({
  LOAD_SETTINGS_SUCCESS: (state, {payload}) => {
    const savedStories = payload.initialStories.savedStories || []
    const newStories = savedStories.map((story) => Object.assign(story, { saved: true }))

    return ({
      ...state,
      loading: false,
      savedStories: newStories
    })
  },
  FETCH_SAVED_STORIES_REQUEST: (state, {payload}) => ({...state, error: null, loading: true}),
  FETCH_SAVED_STORIES_SUCCESS: (state, {payload}) => {
    return ({
      ...state,
      loading: false,
      savedStories: payload.stories.map((story) => Object.assign(story, { saved: true }))
    })
  },
  FETCH_SAVED_STORIES_ERROR: (state, {payload}) => {
    return ({
      ...state,
      loading: false,
      error: payload.error
    })
  },
  SAVE_STORY_SUCCESS: (state, {payload: {story}}) => {
    let newStories = state.savedStories.slice()
    newStories.unshift(story)

    return ({
      ...state,
      savedStories: newStories
    })
  },
  UN_SAVE_STORY_SUCCESS: (state, {payload: {story: activeStory}}) => {
    const newStories = state.savedStories.filter((story) => {
      return story.id !== activeStory.id
    })
    return ({
      ...state,
      savedStories: newStories
    })
  },
  REFRESH_SAVED_STORIES_REQUEST: (state, {payload}) => ({
    ...state,
    loading: false,
    refreshing: true
  }),
  REFRESH_SAVED_STORIES_SUCCESS: (state, {payload: {stories}}) => ({
    ...state,
    refreshing: false,
    stories
  }),
  REFRESH_SAVED_STORIES_ERROR: (state, {payload}) => ({
    ...state,
    loading: false,
    error: payload
  })
}, initialState)
