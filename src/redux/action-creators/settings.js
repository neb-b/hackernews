import { AsyncStorage } from 'react-native'
import { createAction } from 'redux-actions'
import {
  LOAD_SETTINGS_SUCCESS,
  LOAD_SETTINGS_ERROR,
  CHANGE_VIEW
} from '../constants'
import { getJson } from './fetch-builder'

const onLoadSettingsSuccess = createAction(LOAD_SETTINGS_SUCCESS)
const onLoadSettingsError = createAction(LOAD_SETTINGS_ERROR)
const onChangeView = createAction(CHANGE_VIEW)

export const fetchInitialData = (selectedTopic) => {
  return (dispatch) => {
    AsyncStorage.multiGet(['settings', 'savedStories'])
      .then((res) => {
        const settingsRes = res[0][1]
        const settings = settingsRes && JSON.parse(settingsRes) || {}
        const savedStoriesRes = res[1][1]
        const savedStoryIds = savedStoriesRes && JSON.parse(savedStoriesRes) || []

        let query = ''
        if (savedStoryIds.length) {
          query += `savedStories=${savedStoryIds.join(',')}`
        }

        getJson('stories', selectedTopic, query)
          .then((initialStorearies = []) => {
            dispatch(onLoadSettingsSuccess({ settings, initialStories }))
          })
          .catch((err) => {
            console.log('err', err);
            dispatch(onLoadSettingsError({ settings, err}))
          })
      })
      .catch((err) => {
        console.log('err', err);
        dispatch(onLoadSettingsError(err))
      })
  }
}

export function changeView (title) {
  return (dispatch) => dispatch(onChangeView(title))
}
