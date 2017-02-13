import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import reducer from './redux/reducers'

const logger = createLogger()
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store
