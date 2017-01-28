import { createAction } from 'redux-actions'
import { TOGGLE_REPLIES } from '../constants'

const onToggleReplies = createAction(TOGGLE_REPLIES)

export function toggleReplies (id, commentChain) {
  return (dispatch) => {
    let parents = []
    if (commentChain) {
      parents = commentChain.slice(0, commentChain.length - 1)
    }
    dispatch(onToggleReplies({id, parents}))
  }
}
