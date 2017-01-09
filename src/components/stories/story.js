import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import moment from 'moment'
import Thread from '../../connected/thread.connected'

const Story = (props) => {
  const { title, time, score, kids, navigator } = props
  const fromNow = moment(time * 1000).fromNow()

  const thread = {
    title: 'Comments',
    name: 'Thread',
    index: 1,
    props
  }

  return (
    <TouchableHighlight
      style={styles.story}
      underlayColor='#83cce0'
      activeOpacity={.8}
      onPress={() => navigator.push(thread)}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.sub}>
          <View>
            <Text style={styles.time}>{fromNow}</Text>
            <Text style={styles.score}>{score} points</Text>
          </View>
          <View>
            <Text style={styles.comments}>{kids && kids.length || 0} comments</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  story: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderColor: '#66a3b430'
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
    fontSize: 14,
    color: '#adadad'
  },
  score: {
    paddingTop: 5,
    fontSize: 16,
    color: '#ff6600'
  },
  comments: {
    paddingTop: 10,
    fontWeight: '700',
    color: '#66a3b4',
  }
})

export default Story
