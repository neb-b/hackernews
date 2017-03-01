import React from 'react'
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native'
import { formatUrl, fromNow } from '../../helpers/stories-helpers'
import { globalStyles } from '../../styles.js'
const { darkBlue, lightBlack, blackUnderlay, darkBlueUnderlay, blue, black, mediumGrey, orange, white, darkBackground, veryLightGrey } = globalStyles

const Head = ({
  title,
  score,
  kids,
  time,
  url,
  descendants,
  openSafari,
  isDark
}) => {
  return (
    <View style={styles.headWrapper}>
      <TouchableHighlight
        style={[styles.head, isDark && styles.darkHead]}
        underlayColor={isDark ? blackUnderlay : darkBlueUnderlay}
        onPress={() => openSafari(url)}>
        <View>
          <Text style={[styles.title, isDark && styles.darkTitle]}>{title}</Text>

          <View style={styles.siteTime}>
            <Text style={[styles.url, isDark && styles.darkUrl]}>{url && formatUrl(url)}</Text>
            <Text style={[styles.time, url && styles.leftPad]}>{fromNow(time)}</Text>
          </View>

          <View style={styles.belowTitle}>
            <Text style={[styles.score]}>{score} points</Text>
            <Text style={[styles.comments, isDark && styles.darkComments]}>{descendants} comments</Text>
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
  darkHead: {
    backgroundColor: lightBlack
  },
  siteTime: {
    flexDirection: 'row',
  },
  url: {
    fontSize: 18
  },
  darkUrl: {
    color: blue
  },
  time: {
    paddingTop: 2,
    fontSize: 16,
    color: mediumGrey
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
  darkTitle: {
    color: veryLightGrey
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
  darkComments: {
    color: veryLightGrey
  },
  comments: {
    color: darkBlue,
    fontSize: 18,
    fontWeight: '700'
  },
})

export default Head
