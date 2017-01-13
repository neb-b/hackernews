'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const Promise = require('bluebird')
const app = express()

app.use(bodyParser.json())
app.use('/stories', require('./routes/stories'))

app.listen(3000, function () {
  console.log('server listening')
})
