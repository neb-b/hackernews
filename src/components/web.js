import React from 'react'
import {
  ActivityIndicator,
  Text,
  WebView,
  StyleSheet
} from 'react-native'

const Web = (props) => {
  const { url } = props
  return (
    <WebView
      source={{uri: url}}
      style={styles.web}
      startInLoadingState={true}
      renderLoading={() => (
        <ActivityIndicator
          style={styles.spinner}
          color='#125580'
          size='large' />
      )} />
  )
}
const styles = StyleSheet.create({
  web: {
    flex: 1
  },
  spinner: {
    paddingTop: 40
  }
})

export default Web
