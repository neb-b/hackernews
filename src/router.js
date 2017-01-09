import React from 'react'
import { Navigator, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import App from './app'
import Layout from './layout'

const Router = () => (
  <App>
    <Provider store={store}>
      <Navigator
        style={styles.navigator}
        initialRoute={{
          title: 'Top Stories',
          name: 'Stories',
          index: 0
        }}
        renderScene={(route, navigator) => <Layout route={route} navigator={navigator} {...route.props}/>}
        navigationBarHidden={true}/>
    </Provider>
  </App>
)

const styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
})

export default Router
