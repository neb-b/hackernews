import React from 'react'
import {
  WebView,
  StyleSheet
} from 'react-native'

const Web = (props) => {
  const { url } = props
  return (
    <WebView style={styles.web} source={{uri: url}} />
  )
}
const styles = StyleSheet.create({
  web: {
    flex: 1
  }
})

export default Web
