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
    error,
    title,
    navigator,
    isHome,
    component: NewView,
    linkProps,
    openSafari
  } = props

  return (
    <View style={styles.layout}>
      <StatusBar style={styles.statusBar} title={title} navigator={navigator} isHome={isHome} />
      {error && <Text>{error.message}</Text>}
      {isHome && (
        <TabLayout style={styles.tabLayout} {...props} />
      )}
      {!isHome &&  (
        <NewView {...linkProps} openSafari={openSafari} />
      )}
    </View>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  route: PropTypes.object,
  error: PropTypes.any,
  title: PropTypes.string,
  linkProps: PropTypes.object
}

const styles = StyleSheet.create({
  layout: {
    height: HEIGHT,
    width: WIDTH - 20 // TODO: yikes
  },
  statusBar: {
    alignSelf: 'flex-start'
  },
  tabLayout: {
    alignSelf: 'flex-end'
  }
})


export default Layout
