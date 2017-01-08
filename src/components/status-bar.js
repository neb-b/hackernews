import React from 'react'
import {
  View,
  StatusBar,
  Text,
  StyleSheet
} from 'react-native'

const Nav = () => {
  return (
    <View style={styles.statusBar}>
      <StatusBar barStyle='light-content' />
      <Text style={styles.title}>Hacker News</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  statusBar: {
    height: 65,
    paddingTop: 25,
    paddingLeft: 5,
    backgroundColor: '#ff6600'
  },
  title: {
    color: '#f2f2f2',
    fontSize: 20
  }
})

export default Nav
