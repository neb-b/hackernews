'use strict'
const express = require('express')
const axios = require('axios')
const Promise = require('bluebird')
const Router = express.Router()
const ROOT_URL = 'https://hacker-news.firebaseio.com/v0'

const fetchComments = (ids) => {
  const fetchComment = (id) => (
    axios(`${ROOT_URL}/item/${id}.json`)
    .then((comment) => {
      console.log('comment', comment.data);
      return comment.data
    })
    .catch((err) => console.log('err', err))
  )

  return Promise.all(ids.map(fetchComment))
    .then((comments) => {
      console.log('comments here', comments);
      return comments
    })
}

Router.post('/', (req, res) => {
  const ids = req.body.commentIds

  fetchComments(ids)
    .then((comments) => {
      res.send({comments}).status(200)
    })
    .catch((err) => res.send(err).status(409))
})

Router.post('/replies', (req, res) => {
  const ids = req.body.commentIds
  console.log('ids', ids);

  fetchComments(ids)
    .then((comments) => {
      console.log('????????????????????????');
      console.log('comments', comments);
      //do parent/child sorting
      res.send({comments}).status(200)
    })
    .catch((err) => res.send(err).status(409))
})


module.exports = Router
