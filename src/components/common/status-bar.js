import React from 'react'
import {
  View,
  StatusBar,
  Text,
  StyleSheet
} from 'react-native'

const Nav = ({title}) => {
  return (
    <View style={styles.statusBar}>
      <StatusBar barStyle='light-content' />
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  statusBar: {
    height: 64,
    paddingTop: 25,
    paddingLeft: 7,
    backgroundColor: '#0C6A5A'
  },
  title: {
    color: '#f2f2f2',
    textAlign: 'center',
    fontSize: 20
  }
})

export default Nav
