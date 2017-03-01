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
const { lightGrey, mediumGrey, white, darkBlueUnderlay, lightBlack, veryLightGrey, blackUnderlay, darkBackground } = globalStyles

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
  openSafari,
  isDark
}) => {
  const kidsLoaded = kids && kids.length && typeof kids[0] === 'object'

  return (
      <TouchableHighlight
        style={reply ? [styles.replyContainer, isDark && styles.darkReply] : [styles.commentContainer, isDark && styles.darkComment]}
        underlayColor={isDark ? blackUnderlay : darkBlueUnderlay}
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
                <View style={[reply && styles.reply]}>
                  <HTMLView
                    value={`<p>${text}</p>`}
                    onLinkPress={(url) => openSafari(url)}
                    stylesheet={isDark ? darkStyles : styles} />
                </View>

                { kids && kids.length && typeof kids[0] === 'number' && (
                  <LoadComments
                    kids={kids}
                    loadSubComments={loadSubComments}
                    commentChain={commentChain}
                    id={id}
                    commentThatsLoading={commentThatsLoading}
                    isDark={isDark} />
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
                      toggleComment={toggleComment}
                      isDark={isDark} />
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
  darkComment: {
    backgroundColor: lightBlack
  },
  replyContainer: {
    marginTop: 30,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: lightGrey,
  },
  darkReply: {
    borderLeftColor: mediumGrey
  },
  dark: {
    color: lightGrey
  },
  info: {
    color: mediumGrey,
    paddingBottom: 5
  },
  moarPadding: {
    paddingTop: 10,
    paddingBottom: 10
  }
})

const darkStyles = StyleSheet.create({
  p: {
    color: veryLightGrey
  }
})

export default Comment
