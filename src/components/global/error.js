import React from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import { globalStyles } from '../../styles.js'
const { red, white } = globalStyles

const Error = ({ refresh }) => (
  <View style={styles.errorWrapper}>
    <Text style={styles.errorText}>There was an error</Text>
    <TouchableHighlight
      onPress={refresh}
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
    backgroundColor: red
  },
  errorText: {
    textAlign: 'center',
    color: white
  },
  refresh: {
    margin: 5,
    padding: 5,
    borderRadius: 5,
    backgroundColor: white
  },
  refreshText: {
    textAlign: 'center',
    color: red
  }
})

export default Error
