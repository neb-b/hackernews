import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import moment from 'moment'
import HTMLView from 'react-native-htmlview'
import LoadComments from './load-comments'
import { globalStyles } from '../../styles.js'
const { lightGrey, darkGrey, white } = globalStyles

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
  toggleComment,
  openSafari
}) => {
  const kidsLoaded = kids && kids.length && typeof kids[0] === 'object'

  return (
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
                  <HTMLView
                    value={text}
                    onLinkPress={(url) => openSafari(url)}
                    style={styles.text} />
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
    backgroundColor: white
  },
  replyContainer: {
    marginTop: 30,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: lightGrey,
  },
  info: {
    color: darkGrey
  },
  moarPadding: {
    paddingTop: 10,
    paddingBottom: 10
  }
})

export default Comment
