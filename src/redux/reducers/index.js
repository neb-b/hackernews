import { combineReducers } from 'redux'
import stories from './stories'
import thread from './thread'
import statusBar from './status-bar'

export default combineReducers({
  stories,
  thread,
  statusBar
})
