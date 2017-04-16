import React from 'react'
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native'
import Head from './thread/head'
import Comments from './thread/comments'

const Thread = ({
  loading,
  story,
  comments,
  refreshThread,
  refreshing,
  loadComments,
  fetchingReplies,
  fetchingRepliesFor,
  loadReplies,
  toggleComment,
  saveStory,
  unSaveStory,
  openSafari
}) => {
  const {
    saved,
    title,
    score,
    time,
    descendants,
    url
  } = story

  const _renderHead = () => (
    <Head
      title={title}
      score={score}
      time={time}
      url={url}
      descendants={descendants}
      saved={saved}
      saveAction={saved ? unSaveStory : saveStory}
      story={story}
      openSafari={openSafari} />
  )

  return (
    <View style={styles.thread}>
      {loading && _renderHead()}
      {loading && <ActivityIndicator style={styles.loading} />}
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
          toggleComment={toggleComment}
          openSafari={openSafari} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  thread: {
    flex: 1,
    backgroundColor: 'white'
  },
  loading: {
    paddingTop: 50
  }
})

export default Thread
