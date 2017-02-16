import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import Thread from '../../connected/thread.connected'
import { formatUrl, fromNow } from '../../helpers/stories-helpers'
import { globalStyles } from '../../styles.js'
const { darkBlueUnderlay, darkBlue, black, grey, lightGrey, orange, white } = globalStyles

const Story = ({
  title,
  time,
  score,
  kids,
  navigator,
  descendants,
  url,
  openSafari
}) => {
  return (
    <TouchableHighlight
      style={styles.story}
      underlayColor={darkBlueUnderlay}
      activeOpacity={.8}
      onPress={() => openSafari(url)}>
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
            underlayColor={white}
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
    backgroundColor: white,
    borderColor: lightGrey
  },
  title: {
    color: black,
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
    color: grey
  },
  score: {
    paddingTop: 5,
    fontSize: 16,
    color: darkBlue
  },
  comments: {
    color: orange,
    fontSize: 20,
    fontWeight: '800'
  }
})

export default Story
