import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import Loader from './generic/loader'
import Head from './thread/head'
import Comments from './thread/comments'
import Error from './generic/error'

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
  openSafari,
  height,
  error
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
      {error && (
        <Error refresh={() => refreshThread(comments.map((comment) => comment.id))}/>
      )}
      {loading && _renderHead()}
      {loading && <Loader />}
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
          openSafari={openSafari}
          height={height} />
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
