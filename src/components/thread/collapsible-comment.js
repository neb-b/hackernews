import React from 'react'
import { View, StyleSheet } from 'react-native'
import HTMLView from 'react-native-htmlview'
import LoadReplies from './load-replies'
import { fromNow } from '../../helpers/story-helpers'
import Collapsible from 'react-native-collapsible';
import Comment from './comment'

const CollapsibleComment = (props) => {
  const {
    expanded,
    text,
    kids,
    fetchingRepliesFor,
    id,
    commentChain,
    loadReplies
  } = props
  return (
    <View style={styles.container}>
        <Collapsible collapsed={!expanded}>
          <View style={styles.commentBody}>
            <HTMLView
              value={`<p>${text}</p>`}
              onLinkPress={(url) => openSafari(url)}
              stylesheet={styles}
            />
            {kids && kids.length && typeof kids[0] === 'number' && (
              <LoadReplies
                isLoading={fetchingRepliesFor === id}
                loadReplies={loadReplies}
                kids={kids}
                commentChain={commentChain}
                id={id} />
            )}
            {kids && kids.length && typeof kids[0] === 'object' && (
              kids.map((comment) => (
                <Comment
                  key={comment.id}
                  reply
                  {...comment}
                  loadReplies={loadReplies}
                  fetchingRepliesFor={fetchingRepliesFor} />
              ))
            )}
          </View>
      </Collapsible>
    </View>
  )
}

const styles = StyleSheet.create({
  p: {
    lineHeight: 18,
    fontSize: 14
  }
})

export default CollapsibleComment
