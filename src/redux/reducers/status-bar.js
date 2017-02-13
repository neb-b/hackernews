import { handleActions } from 'redux-actions'
import {
  TOGGLE_FILTER,
  CHANGE_TOPIC,
} from '../constants'

const initialState = {
  filterToggled: false,
  filterOptions: [{
    endpoint: 'topstories',
    title: 'Top Stories'
  },
  {
    endpoint: 'beststories',
    title: 'Best Stories'
  },
  {
    endpoint: 'newstories',
    title: 'New Stories'
  },
  {
    endpoint: 'askstories',
    title: 'AskHN'
  },
  {
    endpoint: 'showStories',
    title: 'ShowHN'
  },
  {
    endpoint: 'jobstories',
    title: 'Jobs'
  },
],
  filterSelected: {
    endpoint: 'topstories',
    title: 'Top Stories'
  }
}

export default handleActions({
  TOGGLE_FILTER: (state) => ({
    ...state,
    filterToggled: !state.filterToggled
  }),
  CHANGE_TOPIC: (state, { payload }) => ({
    ...state,
    filterSelected: payload,
    filterToggled: false
  })
}, initialState)
