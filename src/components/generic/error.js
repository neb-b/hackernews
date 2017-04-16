import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Error = ({refresh}) => (
  <View style={styles.error}>
    <Text style={styles.errorText}>There was an error</Text>
    <Button onPress={refresh}>Try again</Button>
  </View>
)

const styles = StyleSheet.create({
  error: {
    backgroundColor: '#fa6a56',
  }
})

export default Error
