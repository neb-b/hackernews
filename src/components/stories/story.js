import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import Web from '../web'
import Thread from '../../connected/thread.connected'
import fromNow from '../../helpers/from-now'
import formatUrl from '../../helpers/format-url'

const Story = ({
  title,
  time,
  score,
  kids,
  navigator,
  descendants,
  url
}) => {
  return (
    <TouchableHighlight
      style={styles.story}
      underlayColor='#12558030'
      activeOpacity={.8}
      onPress={() => {
        console.log('pressed', url);
        navigator.push({
        title: url ? formatUrl(url) : 'Comments',
        component: url ? Web : Thread,
        index: 1,
        props: {
          url,
          outside: !!url,
          title,
          time,
          score,
          descendants,
          kids,
          loading: false
        }
      })
    }
    }>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.url}>{formatUrl(url)}</Text>
        <View style={styles.sub}>
          <View>
            <Text style={styles.time}>{fromNow(time)}</Text>
            <Text style={styles.score}>{score || 0} points</Text>
          </View>
          <TouchableHighlight
            style={styles.commentsContainer}
            activeOpacity={.5}
            underlayColor='#fbfbfb'
            onPress={() => navigator.push({
              title: 'Comments',
              component: Thread,
              index: 1,
              props: {
                title,
                time,
                score,
                descendants,
                kids,
                url
              }
            })}>
            <Text style={styles.comments}>{descendants || 0} comments</Text>
          </TouchableHighlight>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  story: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    backgroundColor: '#fcfcfc',
    borderColor: '#dddddd'
  },
  title: {
    color: '#333333',
    fontSize: 30,
    fontWeight: '900'
  },
  url: {
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 16
  },
  sub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 14,
    color: '#adadad'
  },
  score: {
    paddingTop: 5,
    fontSize: 16,
    color: '#125580'
  },
  comments: {
    color: '#FF9C1F',
    fontSize: 20,
    fontWeight: '800'
  }
})

export default Story
