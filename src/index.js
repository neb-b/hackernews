import React from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import App from './app.container'

const HackerNews = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default HackerNews
