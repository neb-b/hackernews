import React from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native'

const Error = ({ refresh }) => (
  <View style={styles.errorWrapper}>
    <Text style={styles.errorText}>There was an error</Text>
    <TouchableHighlight
      onPress={() => refresh()}
      style={styles.refresh}>
      <Text style={styles.refreshText}>Refresh</Text>
    </TouchableHighlight>
  </View>
)

const styles = StyleSheet.create({
  errorWrapper: {
    padding: 10,
    backgroundColor: '#c93e3e'
  },
  errorText: {
    textAlign: 'center',
    color: '#f4f4f4'
  },
  refresh: {
    paddingTop: 10,
    textAlign: 'center'
  },
  refreshText: {
    textAlign: 'center',
    color: '#ffffff'
  }
})

export default Error
