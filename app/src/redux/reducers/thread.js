import { handleActions } from 'redux-actions'
import {
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_ERROR,
  // REFRESH_COMMENTS_REQUEST,
  // REFRESH_COMMENTS_SUCCESS,
  // REFRESH_COMMENTS_ERROR
} from '../constants'

const updateComments = (comments, commentChain, replies) => {
  console.log('HERE WE GO ________________');
  console.log('comments', comments);
  console.log('commentChain', commentChain);
  console.log('replies', replies);

  if (commentChain.length === 1) {
    return comments.map((comment) => {
      return comment.id === commentChain[0]
        ? Object.assign(comment, { kids: replies })
        : comment
    })
  } else {
    console.log('not 1');
      return comments.map((comment) => {
        console.log('not 1 search', comment);
        if (comment.id === commentChain[0]) {
          console.log('found it');

          const kids = updateComments(comment.kids, commentChain.slice(1, commentChain.length), replies)
          return Object.assign(comment, { kids })
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
  comments: [],
  loadingSubComments: null //
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
    subCommentsParent: payload
  }),
  LOAD_SUB_COMMENTS_SUCCESS: (state, { payload: { commentChain, comments } }) => {

    const newComments = updateComments(state.comments, commentChain, comments)
    console.log('new comments', newComments);
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
  })

}, initialState)
