import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import fromNow from '../../helpers/from-now'

const Head = (props) => {
  const { title, score, kids, time, url, descendants } = props
  return (
    <View style={styles.head}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>{fromNow(time)}</Text>
      <Text style={styles.score}>{score} points</Text>
      <Text style={styles.comments}>{descendants} comments</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  head: {
    padding: 10,
    paddingBottom: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#a8a8a8'
  },
  title: {
    fontSize: 28
  }
})

export default Head
