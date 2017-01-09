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
        <View>
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
    paddingLeft: 10,
    paddingRight: 10,
  },
  sub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#333333',
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
    color: '#66a3b4',
  }
})

export default Story
