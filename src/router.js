import React from 'react'
import { NavigatorIOS, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import Layout from './layout'
import Stories from './connected/stories.connected'

const Router = () => (
  <Layout>
    <Provider store={store}>
      <NavigatorIOS
        style={styles.navigator}
        initialRoute={{
          component: Stories,
          title: 'Top Stories'
        }}
        navigationBarHidden={true}/>
    </Provider>
  </Layout>
)

const styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
})

export default Router
