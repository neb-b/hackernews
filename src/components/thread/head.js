import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import fromNow from '../../helpers/from-now'
import Web from '../web'

const Head = (props) => {
  const { title, score, kids, time, url, descendants, navigator } = props
  console.log('url', url);
  return (
    <TouchableHighlight
      style={styles.head}
      underlayColor='#53887f'
      activeOpacity={.8}
      onPress={() => navigator.push({
        title: 'Hacker News',
        component: Web,
        props: {
          url
        }
      })}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{fromNow(time)}</Text>
        <Text style={styles.score}>{score} points</Text>
        <Text style={styles.comments}>{descendants} comments</Text>
      </View>
    </TouchableHighlight>
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
