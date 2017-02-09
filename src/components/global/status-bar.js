import React from 'react'
import {
  View,
  StatusBar,
  Text,
  StyleSheet
} from 'react-native'


const Nav = ({ title, navigator, viewIndex, settings, outside  }) => {
  return (
    <View style={styles.statusBarWrapper}>
      <StatusBar barStyle='light-content' />
      <View style={styles.statusBar}>
        <View style={styles.nav}>
          {
            viewIndex !== 0 && (
              <Text
                style={styles.text}
                onPress={() => navigator.pop()}>
                Back
              </Text>
            )
          }
        </View>
        <View>
          <Text style={[styles.text, outside && styles.title]}>{title}</Text>
        </View>
        <View style={styles.nav}>
          {
            settings && (
              <Text style={[styles.text, styles.settings]}>Settings</Text>
            )
          }
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  statusBarWrapper: {
    height: 64,
    paddingTop: 25,
    paddingLeft: 7,
    paddingRight: 7,
    backgroundColor: '#125580'
  },
  statusBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nav: {
    width: 100
  },
  text: {
    color: '#f2f2f2',
    fontSize: 20
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 5
  },
  settings: {
    textAlign: 'right'
  }
})

export default Nav
