import React from 'react'
import {
  View,
  StatusBar,
  Text,
  StyleSheet
} from 'react-native'

const Nav = ({ title, navigator }) => {
  return (
    <View style={styles.statusBar}>
      <StatusBar barStyle='light-content' />
      <View style={styles.statusBarText}>
        <Text
          style={styles.text}
          onPress={() => navigator.pop()}>B</Text>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>S</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  statusBar: {
    height: 64,
    paddingTop: 25,
    paddingLeft: 7,
    paddingRight: 7,
    backgroundColor: '#0C6A5A'
  },
  statusBarText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: '#f2f2f2',
    fontSize: 20
  }
})

export default Nav
