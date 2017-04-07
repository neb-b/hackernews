import { AsyncStorage } from 'react-native'
import { createAction } from 'redux-actions'
import {
  LOAD_SETTINGS_SUCCESS,
  LOAD_SETTINGS_ERROR,
  CHANGE_VIEW
} from '../constants'

const onLoadSettingsSuccess = createAction(LOAD_SETTINGS_SUCCESS)
const onLoadSettingsError = createAction(LOAD_SETTINGS_ERROR)
const onChangeView = createAction(CHANGE_VIEW)

export const loadSettings = () => {
  return (dispatch) => {
    AsyncStorage.getItem('settings')
      .then((res) => {
        const settings = res && JSON.parse(res) || {}
        dispatch(onLoadSettingsSuccess(settings))
      })
      .catch((error) => dispatch(onLoadSettingsError(error)))
  }
}

export function changeView (title) {
  return (dispatch) => dispatch(onChangeView(title))
}
