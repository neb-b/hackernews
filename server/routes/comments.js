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
      return comment.data
    })
    .catch((err) => console.log('err', err))
  )

  return Promise.all(ids.map(fetchComment))
    .then((comments) => {
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

module.exports = Router
