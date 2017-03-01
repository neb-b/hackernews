import { combineReducers } from 'redux'
import stories from './stories'
import thread from './thread'
import statusBar from './status-bar'
import settings from './settings'

export default combineReducers({
  stories,
  thread,
  statusBar,
  settings
})
