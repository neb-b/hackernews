import { handleActions } from 'redux-actions'
import {
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_ERROR,
  TOGGLE_REPLIES
} from '../constants'

const updateComments = (comments, commentChain, replies) => {
  if (commentChain.length === 1) {
    return comments.map((comment) => {
      return comment.id === commentChain[0]
        ? Object.assign(comment, { kids: replies, showReplies: true })
        : comment
    })
  } else {
      return comments.map((comment) => {
        if (comment.id === commentChain[0]) {
          const kids = updateComments(comment.kids, commentChain.slice(1, commentChain.length), replies)
          return Object.assign(comment, { kids })
        } else {
          return comment
        }
      })
  }
}

const findCommentAndUpdate = (comments, commentChain, id) => {
  if (!commentChain.length) {
    return comments.map((comment) => {
      return comment.id === id
        ? Object.assign(comment, { showReplies: !comment.showReplies })
        : comment
    })
  } else {
    return comments.map((comment) => {
      if (comment.id === commentChain[0]) {
        const showReplies = findCommentAndUpdate(comment.kids, commentChain.slice(1, commentChain.length), id)
        return Object.assign(comment, { showReplies })
      } else {
        return comment
      }
    })
  }
}


const initialState = {
  loading: false,
  refreshing: false,
  error: null,
  comments: [{
    parents: [],
    text: "This is a comment",
    id: 12345,
    by: "my_username",
    showReplies: true,
    kids: [{
      parent: 12345,
      text: "This is a top level reply",
      id: 54321,
      by: "my_username_2",
      showReplies: true,
      kids: [{
        parent: 54321,
        text: "This is a reply to a reply",
        id: 98765,
        by: "my_username_3",
        kids: null,
        time: Date.now(),
        score: Math.floor(Math.random() * 10).toString()
      }],
      time: Date.now(),
      score: Math.floor(Math.random() * 10).toString()
    }],
    time: Date.now(),
    score: Math.floor(Math.random() * 10).toString()
  }],
}

export default handleActions({
  LOAD_COMMENTS_REQUEST: (state) => ({...state, loading: true}),
  LOAD_COMMENTS_SUCCESS: (state, { payload }) => ({
    ...state,
    loading: false,
    comments: payload
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
    const newComments = updateComments(state.comments, commentChain, comments)
    return {
      ...state,
      comments: newComments,
      loadingSubComments: false
    }
  },
  LOAD_SUB_COMMENTS_ERROR: (state, { payload }) => ({
    ...state,
    loadingSubComments: false,
    error: payload
  }),

  TOGGLE_REPLIES: (state, { payload: { id, parents }  }) => {
    const newComments = findCommentAndUpdate(state.comments, parents, id)
    return {
      ...state,
      comments: newComments
    }
  }
}, initialState)
