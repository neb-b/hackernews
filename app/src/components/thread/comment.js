import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import moment from 'moment'
import HTMLView from 'react-native-htmlview'
import MoreComments from './more-comments'

const Comment = (props) => {
  const {
    text,
    id,
    by,
    kids,
    time,
    score,
    loadSubComments,
    loadingSubComments,
    subCommentsParent,
    subComments
  } = props

  return (
    <View style={styles.comment}>
      <HTMLView value={text} style={styles.text} />
      <Text style={styles.info}>
        {moment(time * 1000).fromNow()}
        by {by}
      </Text>
      <MoreComments
        brothers={kids}
        parentId={id}
        loadSubComments={loadSubComments}
        loadingSubComments={loadingSubComments}
        subCommentsParent={subCommentsParent}
        subComments={subComments} />
      <View style={styles.seperator} />
    </View>
  )
}

const styles = StyleSheet.create({
  comment: {
    padding: 10
  },
  text: {
    fontSize: 18
  },
  info: {
    paddingTop: 5,
    paddingBottom: 5,
    color: '#ff6300'
  },
  seperator: {
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f96e1530'
  }
})

export default Comment
