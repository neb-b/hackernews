'use strict'
const express = require('express')
const axios = require('axios')
const Promise = require('bluebird')
const Router = express.Router()
const ROOT_URL = 'https://hacker-news.firebaseio.com/v0'

const fetchComments = (ids) => {
  const fetchComment = (id) => (
    axios(`${ROOT_URL}/item/${id}.json`)
    .then((comment) => comment.data)
  )

  return Promise.all(ids.map(fetchComment))
}

Router.post('/', (req, res) => {
  const ids = req.body.commentIds

  return fetchComments(ids)
    .then((comments) => {
      console.log('comments', comments);
      res.send({comments}).status(200)
    })
    .catch((err) => res.send(err).status(409))
})

module.exports = Router
