import { combineReducers } from 'redux'
import settings from './settings'
import stories from './stories'
import savedStories from './saved-stories'
import thread from './thread'

export default combineReducers({
  settings,
  stories,
  savedStories,
  thread
})
