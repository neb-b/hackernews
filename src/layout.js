import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, View, Text, StyleSheet } from 'react-native'
import StatusBar from './components/status-bar'
import TabLayout from './components/tab-layout'

const window = Dimensions.get('window')
const HEIGHT = window.height
const WIDTH = window.width

const Layout = (props) => {
  const {
    viewingStories,
    changeView,
    topics,
    title,
    navigator,
    isHome,
    component: NewView,
    viewIndex,
    linkProps,
    stories,
    savedStories,
    changeTopic
  } = props

console.log('layout', props
);
  return (
    <View style={styles.layout}>
      <StatusBar style={styles.statusBar} title={title} navigator={navigator} isHome={isHome} />
      {isHome && (
        <TabLayout
          style={styles.actionBar}
          navigator={navigator}
          stories={stories}
          savedStories={savedStories}
          title={title}
          topics={topics}
          changeView={changeView}
          viewingStories={viewingStories}
          viewIndex={viewIndex}
          changeTopic={changeTopic} />
      )}
      {!isHome &&  (
        <NewView {...linkProps} />
      )}
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
    flex: 1,
    backgroundColor: 'white'
  },
  statusBar: {
    alignSelf: 'flex-start'
  },
  actionBar: {
    alignSelf: 'flex-end'
  }
})


export default Layout
