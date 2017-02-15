import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native'
import fromNow from '../../helpers/from-now'
import Web from '../web'
import formatUrl from '../../helpers/format-url'
import { globalStyles } from '../../styles.js'
const { darkBlue, black, darkGrey, orange, white } = globalStyles

const Head = (props) => {
  const { title, score, kids, time, url, descendants, navigator } = props

  return (
    <View style={styles.headWrapper}>
      <TouchableHighlight
        style={styles.head}
        underlayColor='#12558030'
        onPress={() => navigator.push({
          title: formatUrl(url),
          component: Web,
          index: 2,
          props: {
            url,
            outside: true
          }
        })}>
        <View>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.siteTime}>
            <Text style={styles.url}>{url && formatUrl(url)}</Text>
            <Text style={[styles.time, url && styles.leftPad]}>{fromNow(time)}</Text>
          </View>

          <View style={styles.belowTitle}>
            <Text style={styles.score}>{score} points</Text>
            <Text style={styles.comments}>{descendants} comments</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  headWrapper: {
    minHeight: 150
  },
  head: {
    padding: 10,
    paddingBottom: 20,
    backgroundColor: white
  },
  siteTime: {
    flexDirection: 'row',
  },
  url: {
    fontSize: 18
  },
  time: {
    paddingTop: 2,
    fontSize: 16,
    color: darkGrey
  },
  leftPad: {
    paddingLeft: 10,
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 30,
    color: black,
    fontWeight: '900'
  },
  belowTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10
  },
  score: {
    fontSize: 18,
    color: orange,
    fontWeight: '700'
  },
  comments: {
    color: darkBlue,
    fontSize: 18,
    fontWeight: '700'
  },
})

export default Head
