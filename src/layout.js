import React, { PropTypes } from 'react'
import { Dimensions, View, StyleSheet } from 'react-native'
import StatusBar from './components/status-bar'
import TabBar from './components/tab-bar'

const window = Dimensions.get('window')
const HEIGHT = window.height
const WIDTH = window.width

const Layout = (props) => {
  const {viewingStories, changeView, topics, title} = props

  return (
    <View style={styles.layout}>
      <StatusBar style={styles.statusBar} title={title} navigator={navigator} />
      <TabBar
        style={styles.actionBar}
        title={title}
        changeView={changeView}
        viewingStories={viewingStories} />
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
