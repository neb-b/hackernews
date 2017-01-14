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
    reply
  } = props

  return (
    <View style={reply ? styles.reply : styles.comment}>
      <HTMLView value={text} style={styles.text} />
      <Text style={styles.info}>
        {moment(time * 1000).fromNow()}
        by {by}
      </Text>

      {kids && kids.length && typeof kids[0] === 'number' && (
        <MoreComments
          kids={kids}
          loadSubComments={loadSubComments}
          loadingSubComments={loadingSubComments}
          subCommentsParent={subCommentsParent}/>
      )}

      {kids && kids.length && typeof kids[0] === 'object' && (
        kids.map((comment) => (
          <Comment
            key={comment.id}
            {...comment}
            loadSubComments={loadSubComments}
            reply={true} />
        ))
      )}

      {!reply && <View style={styles.seperator} />}
    </View>
  )
}

const styles = StyleSheet.create({
  comment: {
    padding: 10
  },
  reply: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#0C6A5A',
    backgroundColor: '#ffdfc8'
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
