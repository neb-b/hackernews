import { handleActions } from 'redux-actions'
import {
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_ERROR,
  TOGGLE_COMMENT
} from '../constants'

const updateComments = (comments, commentChain, replies, newCommentChain) => {
  let commentChainList = newCommentChain || commentChain

  if (commentChainList.length === 1) {
    return comments.map((comment) => {
      if (comment.id === commentChainList[0]) {
        const childsCommentChain = commentChain.slice()
        childsCommentChain.push(replies[0].id)

        return Object.assign(comment, {
            kids: replies.map((reply) => (
              Object.assign(
                reply, {
                  showComment: true,
                  commentChain: childsCommentChain
                }
              )))
          })
      } else {
        return comment
      }
    })
  } else {
    return comments.map((comment) => {
      if (comment.id === commentChainList[0]) {
        const kids = updateComments(comment.kids, commentChain, replies, commentChainList.slice(1))
        return Object.assign(comment, { kids })
      } else {
        return comment
      }
    })
  }
}

const toggleViewComment = (comments, commentChain = [], id) => {
  if (commentChain.length === 1) {
    return comments.map((comment) => {
      return comment.id === id
        ? Object.assign(comment, { showComment: !comment.showComment })
        : comment
    })
  } else {
    return comments.map((comment) => {
      if (comment.id === commentChain[0]) {
        const showComment = toggleViewComment(comment.kids, commentChain.slice(1), id)
        return Object.assign(comment, { showComment })
      } else {
        return comment
      }
    })
  }
}

const initialState = {
  loading: true,
  refreshing: false,
  error: null,
  comments: []
}

export default handleActions({
  LOAD_COMMENTS_REQUEST: (state) => ({...state, loading: true}),
  LOAD_COMMENTS_SUCCESS: (state, { payload }) => ({
    ...state,
    loading: false,
    comments: payload.map((comment) => (
      Object.assign(
        comment, {
          showComment: true,
          commentChain: [comment.id]
        }))
    )
  }),
  LOAD_COMMENTS_ERROR: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload
  }),

  LOAD_SUB_COMMENTS_REQUEST: (state, { payload }) => ({
    ...state,
    loadingSubComments: true,
    commentThatsLoading: payload
  }),
  LOAD_SUB_COMMENTS_SUCCESS: (state, { payload: { commentChain, comments } }) => {
    console.log('LOAD_SUB_COMMENTS_SUCCESS', commentChain);
    const newComments = updateComments(state.comments, commentChain, comments)
    return {
      ...state,
      comments: newComments,
      loadingSubComments: false,
      commentThatsLoading: null
    }
  },
  LOAD_SUB_COMMENTS_ERROR: (state, { payload }) => ({
    ...state,
    loadingSubComments: false,
    error: payload
  }),

  TOGGLE_COMMENT: (state, { payload: { id, commentChain }  }) => {
    const newComments = toggleViewComment(state.comments, commentChain, id)
    return {
      ...state,
      comments: newComments
    }
  }
}, initialState)
