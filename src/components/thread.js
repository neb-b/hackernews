import React from 'react'
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native'
import Head from './thread/head'
import Comments from './thread/comments'

const Thread = ({
  loading,
  title,
  score,
  time,
  descendants,
  url,
  comments,
  refreshThread,
  refreshing,
  loadComments,
  fetchingReplies,
  fetchingRepliesFor,
  loadReplies,
  toggleComment
}) => {

  const _renderHead = () => (
    <Head title={title} score={score} time={time} url={url} descendants={descendants}/>
  )
  return (
    <View style={styles.thread}>
      {loading && _renderHead()}
      {loading && <ActivityIndicator />}
      {!loading && (
        <Comments
          comments={comments}
          renderHeader={_renderHead}
          refreshThread={refreshThread}
          refreshing={refreshing}
          loadComments={loadComments}
          fetchingReplies={fetchingReplies}
          fetchingRepliesFor={fetchingRepliesFor}
          loadReplies={loadReplies}
          toggleComment={toggleComment} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  thread: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default Thread
