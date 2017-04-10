import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import AppView from './app.container'

const App = () => (
  <Provider store={store}>
    <AppView />
  </Provider>
)

export default App
