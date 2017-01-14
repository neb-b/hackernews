'use strict'
const express = require('express')
const axios = require('axios')
const Promise = require('bluebird')
const Router = express.Router()
const ROOT_URL = 'https://hacker-news.firebaseio.com/v0'

const fetchStories = (ids) => {
  const fetchStory = (id) => (
    axios(`${ROOT_URL}/item/${id}.json`)
    .then((story) => story.data)
  )

  return Promise.all(ids.slice(0,30).map(fetchStory))
}

Router.get('/top', (req, res) => {
  const url = `${ROOT_URL}/topstories.json`

  axios(url)
    .then((response) => fetchStories(response.data))
    .then((stories) => res.send(stories).status(200))
    .catch((err) => res.send(err).status(409))
})

module.exports = Router
