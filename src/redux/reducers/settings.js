import { handleActions } from 'redux-actions'
import {
  UPDATE_SETTINGS_ERROR,
  UPDATE_SETTINGS_SUCCESS
} from '../constants'

const initialState = {
  loading: true,
  settings: [{
    id: 'darkmode',
    active: false,
    name: 'Dark mode'
  }]
}

export default handleActions({
  LOAD_SETTINGS: (state, {payload}) => ({
    ...state,
    loading: false,
    settings: payload
  }),
  UPDATE_SETTINGS_SUCCESS: (state, {payload: {setting}}) => ({
    ...state,
    settings: state.settings.map((option) => {
      return option.id === setting
        ? Object.assign(option, {active: !option.active})
        : option
    })
  }),
  UPDATE_SETTINGS_ERROR: (state, {payload}) => ({
    ...state,
    error: payload
  })
}, initialState)
