import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import moment from 'moment'
import Thread from '../../connected/thread.connected'

const Title = (props) => {
  const { title, score, kids, time, url } = props
  const fromNow = moment(time * 1000).fromNow()

  return (
    <View style={styles.head}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>{fromNow}</Text>
      <Text style={styles.score}>{score} points</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  head: {
    padding: 10
  },
  title: {
    fontSize: 28
  }
})

export default Title
