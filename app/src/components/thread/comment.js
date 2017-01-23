import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import moment from 'moment'
import HTMLView from 'react-native-htmlview'
import MoreComments from './more-comments'

const getParents = (parents, id) => {
  let commentChain = []

  if (parents && parents.length) {
    commentChain = parents
  }

  commentChain.push(id)
  return commentChain
}

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
    reply,
    parent,
    deleted,
    parents
  } = props

  return deleted ? null : (
      <View style={reply ? styles.reply : styles.comment}>
        <HTMLView value={text} style={styles.text} />
        {!deleted &&
          <Text style={styles.info}>
            {moment(time * 1000).fromNow()}
            by {by}
          </Text>
        }

        {kids && kids.length && typeof kids[0] === 'number' && (
          <MoreComments
            kids={kids}
            loadSubComments={loadSubComments}
            parents={parents}
            id={id}/>
        )}

        {kids && kids.length && typeof kids[0] === 'object' && (
          kids.map((comment) => !comment.deleted && (
            <Comment
              key={comment.id}
              {...comment}
              loadSubComments={loadSubComments}
              parentId={id}
              parents={getParents(parents, id)}
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
    paddingTop: 10,
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
