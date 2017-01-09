import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import moment from 'moment'
import HTMLView from 'react-native-htmlview'

const Comment = (props) => {
  const { text } = props

  return (
    <View style={styles.comment}>
      <HTMLView value={text} style={styles.text} />
      <View style={styles.seperator} />
    </View>
  )
}

const styles = StyleSheet.create({
  comment: {
    paddingBottom: 20,
  },
  text: {
    fontSize: 18
  },
  seperator: {
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f96e1530'
  }
})

export default Comment
