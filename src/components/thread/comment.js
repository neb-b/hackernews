import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import moment from 'moment'
import HTMLView from 'react-native-htmlview'
import LoadComments from './load-comments'

const createChain = (parents, id) => {
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

  const kidsLoaded = kids && kids.length && typeof kids[0] === 'object'

  let commentChain
  if (kidsLoaded) {
    commentChain = createChain(parents, id)
  }

  return deleted ? null : (
      <View style={reply ? styles.replyContainer : styles.commentContainer}>
        <View style={reply ? '' : styles.commentPadding}>
          <View style={reply && styles.reply}>
            <HTMLView value={text} style={styles.text} />
          </View>

          <View style={styles.actions}>
            <Text style={styles.info}>
              {moment(time * 1000).fromNow()}
              by {by}
            </Text>
            {kids && kids.length && typeof kids[0] === 'number' && (
              <LoadComments
                kids={kids}
                loadSubComments={loadSubComments}
                parents={parents}
                id={id}
                commentThatsLoading={commentThatsLoading}/>
            )}
          </View>


          { kidsLoaded && (
            kids.map((comment) => !comment.deleted && (
              <Comment
                key={comment.id}
                {...comment}
                loadSubComments={loadSubComments}
                parentId={id}
                parents={commentChain || parents}
                reply={true} />
            ))
          )}
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  commentContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fcfcfc'
  },
  replyContainer: {
    marginTop: 20,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#bbbbbb',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5
  },
  info: {
    paddingTop: 5,
    color: '#9f9f9f'
  }
})

export default Comment
