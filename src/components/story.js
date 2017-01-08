import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import moment from 'moment'

const Story = (props) => {
  const { title, time, score, kids } = props
  return (
    <View style={styles.story}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.sub}>
        <View>
          <Text style={styles.time}>{time}</Text>
          <Text style={styles.score}>{score} points</Text>
        </View>
        <View style={styles.subRight}>
          <Text style={styles.comments}>{kids && kids.length || 0} comments</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  story: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomWidth: 1,
    borderColor: '#adadad'
  },
  sub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subRight: {

  },
  title: {
    color: '#f2f2f2',
    fontSize: 22
  },
  time: {
    paddingTop: 5,
    fontSize: 10,
    color: '#adadad'
  },
  score: {
    paddingTop: 5,
    fontSize: 12,
    color: '#ff6600'
  },
  comments: {
    padding: 15,
    color: '#f2f2f2',
  }
})

export default Story
