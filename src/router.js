import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import App from './app'

const Router = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Router
