import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Layout from './layout'
import Stories from './connected/stories.connected'

const Router = () => (
  <Layout>
    <Provider store={store}>
      <Stories />
    </Provider>
  </Layout>
)

export default Router
