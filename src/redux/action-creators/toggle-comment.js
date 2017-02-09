import { createAction } from 'redux-actions'
import {
  TOGGLE_COMMENT
} from '../constants'

const onToggleComment = createAction(TOGGLE_COMMENT)

export function toggleComment (id, commentChain) {
  return (dispatch) => {
    dispatch(onToggleComment({id, commentChain}))
  }
}
