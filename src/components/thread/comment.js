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
    parents,
    commentThatsLoading
  } = props

  return deleted ? null : (
      <View style={reply ? styles.replyContainer : styles.commentContainer}>
        {reply && <View style={styles.seperator} />}

        <Text style={styles.info}>
          {moment(time * 1000).fromNow()}
          by {by}
        </Text>

        <View style={reply && styles.reply}>
          <HTMLView value={text} style={styles.text} />
        </View>

        {kids && kids.length && typeof kids[0] === 'number' && (
          <MoreComments
            kids={kids}
            loadSubComments={loadSubComments}
            parents={parents}
            id={id}
            commentThatsLoading={commentThatsLoading}/>
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
      </View>
    )
}

const styles = StyleSheet.create({
  commentContainer: {
    marginLeft: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    borderLeftWidth: 1,
    borderLeftColor: '#0C6A5A',
  },
  replyContainer: {
    marginTop: 10,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#0C6A5A',
  },
  reply: {
    paddingTop: 10
  },
  info: {
    paddingTop: 5,
    paddingBottom: 5,
    color: '#9f9f9f'
  },
  seperator: {
    borderBottomWidth: 1,
    borderBottomColor: '#f96e1530'
  }
})

export default Comment
