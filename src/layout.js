import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, View, Text, StyleSheet } from 'react-native'
import StatusBar from './components/status-bar'
import TabBarLayout from './components/tab-bar'

const window = Dimensions.get('window')
const HEIGHT = window.height
const WIDTH = window.width

const Layout = (props) => {
  const {viewingStories, changeView, topics, title, navigator, overwriteTitle} = props
console.log('navigator', navigator);
  return (
    <View style={styles.layout}>
      <StatusBar style={styles.statusBar} title={overwriteTitle || title} navigator={navigator} />
      {
        !overwriteTitle
        ? <TabBarLayout
          style={styles.actionBar}
          navigator={navigator}
          title={title}
          changeView={changeView}
          viewingStories={viewingStories} />
        : <Text>Comments</Text>
      }

    </View>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  navigator: PropTypes.object,
  route: PropTypes.object
}

const styles = StyleSheet.create({
  layout: {
    height: HEIGHT,
    width: WIDTH
  },
  content: {
    flex: 1
  },
  statusBar: {
    alignSelf: 'flex-start'
  },
  actionBar: {
    alignSelf: 'flex-end'
  }
})


export default Layout
