import { AsyncStorage } from 'react-native'
import { createAction } from 'redux-actions'
import {
  LOAD_SETTINGS,
  UPDATE_SETTINGS_SUCCESS,
  UPDATE_SETTINGS_ERROR
} from '../constants'

const onLoadSettings = createAction(LOAD_SETTINGS)
const onUpdateSettingsSuccess = createAction(UPDATE_SETTINGS_SUCCESS)
const onUpdateSettingsError = createAction(UPDATE_SETTINGS_ERROR)

export function loadSettings () {
  return (dispatch) => {
    AsyncStorage.getItem('darkmode')
      .then((res) => {
        const darkMode = res && JSON.parse(res)
        const settings = [{
            id: "darkmode",
            active: darkMode,
            name: "Dark mode"
          }]

        return settings
      })
      .then((settings) => dispatch(onLoadSettings(settings)))
  }
}

export function updateSettings (setting, active) {
  console.log('setItem', setting, JSON.stringify(!active));
  return (dispatch) => {
    AsyncStorage.setItem(setting, JSON.stringify(!active))
      .then((res) => {
        console.log('res', res)
        dispatch(onUpdateSettingsSuccess({setting}))
      })
      .catch((err) => dispatch(onUpdateSettingsError(err)))
    }
}
