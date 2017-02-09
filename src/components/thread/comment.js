import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import moment from 'moment'
import HTMLView from 'react-native-htmlview'
import LoadComments from './load-comments'

const Comment = ({
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
  commentThatsLoading,
  showComment,
  commentChain,
  toggleComment
}) => {
  const kidsLoaded = kids && kids.length && typeof kids[0] === 'object'

  return deleted ? null : (
      <TouchableHighlight
        style={reply ? styles.replyContainer : styles.commentContainer}
        underlayColor='#12558030'
        activeOpacity={.8}
        onPress={() => toggleComment(id, commentChain)}>
        <View style={[reply ? '' : styles.commentPadding, !showComment && styles.moarPadding]}>
          <Text style={styles.info}>
            {`${by} `}
            {moment(time * 1000).fromNow()}
          </Text>

          {
            showComment && !deleted && (
              <View>
                <View style={reply && styles.reply}>
                  <HTMLView value={text} style={styles.text} />
                </View>

                { kids && kids.length && typeof kids[0] === 'number' && (
                  <LoadComments
                    kids={kids}
                    loadSubComments={loadSubComments}
                    commentChain={commentChain}
                    id={id}
                    commentThatsLoading={commentThatsLoading}/>
                )}

                { kidsLoaded && showComment && (
                  kids.map((comment) => !comment.deleted && (
                    <Comment
                      key={comment.id}
                      {...comment}
                      loadSubComments={loadSubComments}
                      parentId={id}
                      reply={true}
                      commentThatsLoading={commentThatsLoading}
                      toggleComment={toggleComment}/>
                  ))
                )}
              </View>
            )
          }
          { deleted && <Text>deleted</Text>}
        </View>
      </TouchableHighlight>
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
  info: {
    color: '#9f9f9f'
  },
  moarPadding: {
    paddingTop: 10,
    paddingBottom: 10
  }
})

export default Comment
