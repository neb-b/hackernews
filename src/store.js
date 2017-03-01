import React from 'react'
import { AsyncStorage } from 'react-native'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import reducers from './redux/reducers'

const logger = createLogger()

const middleware = __DEV__
  ? applyMiddleware(thunk, promise, logger)
  : applyMiddleware(thunk)

const store = createStore(
  reducers,
  middleware
)

export default store
