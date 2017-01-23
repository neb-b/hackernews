import React from 'react'
import { Navigator, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import View from './view'
import Stories from './connected/stories.connected'

const Router = () => (
  <Provider store={store}>
    <Navigator
      style={styles.navigator}
      navigationBarHidden={true}
      initialRoute={{
        title: 'Top Stories',
        component: Stories,
        index: 0
      }}
      renderScene={(route, navigator, index) => {
        return(
          <View
            Component={route.component}
            navigator={navigator}
            viewTitle={route.title}
            index={route.index}
            {...route.props}/>)
      }}
      />
  </Provider>
)

const styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
})

export default Router
