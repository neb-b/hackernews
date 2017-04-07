import { handleActions } from 'redux-actions'
import {
  LOAD_SETTINGS_SUCCESS,
  LOAD_SETTINGS_ERROR,
  CHANGE_VIEW
} from '../constants'
import getTitle from '../../helpers/get-title'

const initialState = {
  loading: true,
  error: false,
  viewingStories: true,
  title: 'Top Stories',
  topics: {
    currentlySelected: 'topstories',
    available: ['topstories', 'beststories', 'jobstories']
  },
  savedStoryIds: [],
  settings: {
    darkMode: {
      id: 'darkmode',
      name: 'Dark mode',
      active: false
    }
  }
}

export default handleActions({
  LOAD_SETTINGS_SUCCESS: (state, {payload}) => {
    return ({
      ...state,
      loading: false,
      settings: payload.settings
    })
  },
  LOAD_SETTINGS_ERROR: (state, {payload}) => ({
    ...state,
    error: payload.error,
    loading: false
  }),
  CHANGE_VIEW: (state, {payload}) => {
    console.log('state', state);
    const { viewingStories, topics: { currentlySelected } } = state

    const title = getTitle(!state.viewingStories, currentlySelected)
    return ({
      ...state,
      viewingStories: !state.viewingStories,
      title
    })
  }
}, initialState)
