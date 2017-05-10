import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { createLogger } from 'redux-logger'
import reducers from './redux/reducers'

const isDev = __DEV__ // eslint-disable-line no-undef
const logger = createLogger()

const middleware = isDev
  ? applyMiddleware(thunk, promise, logger)
  : applyMiddleware(thunk)

const store = createStore(
  reducers,
  middleware
)

export default store
