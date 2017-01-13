import React from 'react'
import {
  View,
  StatusBar,
  Text,
  StyleSheet
} from 'react-native'

const Nav = ({ title, navigator, index  }) => {
  return (
    <View style={styles.statusBar}>
      <StatusBar barStyle='light-content' />
      <View style={styles.statusBarText}>
        {
          index === 0
          ? <View />
          : <Text
            style={styles.text}
            onPress={() => navigator.pop()}>Back</Text>
        }
        <Text style={styles.text}>{title}</Text>
        <View />
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