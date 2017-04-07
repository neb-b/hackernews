import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import ConnectedApp from './app.connected'

const App = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
)

export default App
