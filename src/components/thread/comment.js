import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import moment from 'moment'

const Comment = (props) => {
  const { text } = props

  return (
    <View style={styles.comment}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.seperator} />
    </View>
  )
}

const styles = StyleSheet.create({
  comment: {
    paddingBottom: 20,
  },
  text: {
    fontSize: 18,
    lineHeight: 30
  },
  seperator: {
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f96e15'
  }
})

export default Comment
