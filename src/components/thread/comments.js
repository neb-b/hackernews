import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import List from '../generic/list'
import Comment from './comment'

const Comments = ({
  comments,
  refreshing,
  refreshThread,
  renderHeader,
  loadComments,
  fetchingReplies,
  fetchingRepliesFor,
  loadReplies,
  toggleComment,
  openSafari
}) => {
  return (
    <View>
      <List
        style={styles.comments}
        header={renderHeader}
        refreshing={refreshing}
        refresh={() => refreshThread(comments.map((comment) => comment.id))}
        items={comments}
        renderItem={({item: comment}) => (
          <Comment
            {...comment}
            loadComments={loadComments}
            fetchingReplies={fetchingReplies}
            fetchingRepliesFor={fetchingRepliesFor}
            loadReplies={loadReplies}
            toggleComment={toggleComment}
            openSafari={openSafari} />
        )}/>
    </View>
  )
}

const styles = StyleSheet.create({
  comments: {

    // height: HEIGHT
  }
})

export default Comments
