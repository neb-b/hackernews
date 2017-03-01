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
const { darkBlueUnderlay, mediumGrey, lightBlackUnderlay, darkBackgroundUnderlay, darkBlue, black, grey, lightGrey, orange, white, blackUnderlay, darkBackground, veryLightGrey, lightBlack, blue } = globalStyles

const Story = ({
  title,
  time,
  score,
  kids,
  navigator,
  descendants,
  url,
  openSafari,
  isDark
}) => {
  const threadView = {
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
  }

  return (
    <TouchableHighlight
      style={[styles.story, isDark && styles.darkStory]}
      underlayColor={isDark ? blackUnderlay : darkBlueUnderlay}
      activeOpacity={.8}
      onPress={() => url ? openSafari(url) : navigator.push(threadView)}>
      <View>
        <Text style={[styles.title, isDark && styles.darkTitle]}>{title}</Text>
        <Text style={[styles.url, isDark && styles.darkUrl]}>{formatUrl(url)}</Text>
        <View style={styles.sub}>
          <View>
            <Text style={styles.time}>{fromNow(time)}</Text>
            <Text style={[styles.score, isDark && styles.darkScore]}>{score || 0} points</Text>
          </View>
          <TouchableHighlight
            style={styles.commentsContainer}
            activeOpacity={.5}
            underlayColor={isDark ? lightBlackUnderlay : white}
            onPress={() => navigator.push(threadView)}>
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
  darkStory: {
    backgroundColor: lightBlack,
    borderColor: mediumGrey
  },
  title: {
    color: black,
    fontSize: 30,
    fontWeight: '900'
  },
  darkTitle: {
    color: veryLightGrey
  },
  url: {
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 16
  },
  darkUrl: {
    color: blue
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
  darkScore: {
    color: veryLightGrey
  },
  comments: {
    color: orange,
    fontSize: 20,
    fontWeight: '800'
  }
})

export default Story
