import { combineReducers } from 'redux'
import settings from './settings'
import stories from './stories'
import savedStories from './saved-stories'

export default combineReducers({
  settings,
  stories,
  savedStories
})
