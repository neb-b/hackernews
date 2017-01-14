'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const Promise = require('bluebird')
const morgan = require('morgan')
const app = express()

// parse application/json
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })


app.use('/stories', require('./routes/stories'))
app.use('/comments', require('./routes/comments'))

app.listen(3000, function () {
  console.log('server listening')
})
