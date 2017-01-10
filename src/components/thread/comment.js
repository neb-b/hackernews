import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import moment from 'moment'
import HTMLView from 'react-native-htmlview'

const Comment = (props) => {
  const { text, by, kids, time } = props
  return (
    <View style={styles.comment}>
      <HTMLView value={text} style={styles.text} />
      <Text style={styles.info}>
        {moment(time * 1000).fromNow()}
        by {by}
      </Text>
      {
        kids && kids.length && (
          <View style={styles.viewComments}>
            <Text style={styles.viewCommentsText}>
              {kids.length} comments
            </Text>
          </View>
        )
      }
      <View style={styles.seperator} />
    </View>
  )
}

const styles = StyleSheet.create({
  comment: {
    padding: 10,
  },
  text: {
    fontSize: 18
  },
  info: {
    paddingTop: 5,
    paddingBottom: 5,
    color: '#ff6300'
  },
  viewComments: {
    marginTop: 10,
    backgroundColor: '#66a3b4',
    borderRadius: 5
  },
  viewCommentsText: {
    alignSelf: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    color: '#fff'
  },
  seperator: {
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f96e1530'
  }
})

export default Comment
