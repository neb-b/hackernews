import React from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native'

const Error = ({ refresh, refreshProps }) => (
  <View style={styles.errorWrapper}>
    <Text style={styles.errorText}>There was an error</Text>
    <TouchableHighlight
      onPress={() => refresh(refreshProps)}
      underlayColor='#ffb0b0'
      activeOpacity={.8}
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
    margin: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#f5f5f5'
  },
  refreshText: {
    textAlign: 'center',
    color: '#c93e3e'
  }
})

export default Error
