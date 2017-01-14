'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const Promise = require('bluebird')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/stories', require('./routes/stories'))
app.use('/comments', require('./routes/comments'))

app.listen(3000, function () {
  console.log('server listening')
})
