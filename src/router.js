import React from 'react'
import { Navigator } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import App from './app'
import View from './view'
import Stories from './connected/stories.connected'

const Router = () => (
  <Provider store={store}>
    <Navigator
      navigationBarHidden={true}
      initialRoute={{
        title: 'Top Stories',
        component: Stories,
        index: 0
      }}
      renderScene={(route, navigator, index) => {
        return(
          <App>
            <View
              Component={route.component}
              navigator={navigator}
              viewTitle={route.title}
              index={route.index}
              {...route.props} />
          </App>
          )
        }}
      />
  </Provider>
)

export default Router
