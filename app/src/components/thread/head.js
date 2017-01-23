import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import fromNow from '../../helpers/from-now'
import Web from '../web'
import formatUrl from '../../helpers/format-url'

const Head = (props) => {
  const { title, score, kids, time, url, descendants, navigator } = props

  return (
    <TouchableHighlight
      style={styles.head}
      underlayColor='#53887f'
      activeOpacity={.8}
      onPress={() => navigator.push({
        title: 'Hacker News',
        component: Web,
        index: 2,
        props: {
          url
        }
      })}>
      <View>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.siteTime}>
          <Text style={styles.url}>{formatUrl(url)}</Text>
          <Text style={styles.time}>{fromNow(time)}</Text>
        </View>

        <View style={styles.belowTitle}>
          <Text style={styles.score}>{score} points</Text>
          <Text style={styles.comments}>{descendants} comments</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  head: {
    flex: 1,
    padding: 10,
    paddingBottom: 20,
    marginBottom: 10
  },
  siteTime: {
    flexDirection: 'row',
  },
  url: {
    fontSize: 18
  },
  time: {
    paddingLeft: 10,
    paddingTop: 2,
    fontSize: 16,
    color: '#828282'
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 30,
    color: '#333333',
    fontWeight: '900'
  },
  belowTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10
  },
  score: {
    fontSize: 18,
    color: '#ff6600'
  },
  comments: {
    color: '#00A287',
    fontSize: 18,
  },
})

export default Head
