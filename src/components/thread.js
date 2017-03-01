import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ActivityIndicator,
  Dimensions,
  ListView,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Head from './thread/head'
import Comment from './thread/comment'
import { globalStyles } from '../styles'
const { mediumBlack, mediumGrey, darkBlue } = globalStyles
const SCREEN_HEIGHT = Dimensions.get('window').height

const Thread = ({
  loading,
  comments,
  // Below are passed from Stories view in view change
  title,
  time,
  score,
  descendants,
  url,
  navigator,
  loadSubComments,
  commentThatsLoading,
  toggleComment,
  refreshThread,
  refreshing,
  openSafari,
  isDark
}) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  const threadItems = [{title, score, time, descendants, url}].concat(comments)

  const renderHead = () => (
    <Head
      navigator={navigator}
      key={0}
      title={title}
      score={score}
      time={time}
      descendants={descendants}
      url={url}
      openSafari={openSafari}
      isDark={isDark} />
  )

  const renderThreadRow = (threadItem) => {
    return (
      threadItem.title
      ? renderHead()
      : <Comment
          key={threadItem.id}
          {...threadItem}
          loadSubComments={loadSubComments}
          commentThatsLoading={commentThatsLoading}
          toggleComment={toggleComment}
          openSafari={openSafari}
          isDark={isDark} />
    )
  }

  return (
    <View style={[styles.threadWrapper, isDark && styles.darkBackground]}>
      {loading && (
        <View style={[styles.loadingThread, isDark && styles.darkLoading]}>
          {renderHead()}
          <ActivityIndicator
              key={1}
              style={styles.spinner}
              color={isDark ? mediumGrey : darkBlue}
              size='large' />
        </View>
      )}
      {!loading && (
        <View>
          <ListView
            style={styles.listView}
            dataSource={ds.cloneWithRows(threadItems)}
            renderRow={renderThreadRow}refreshControl={
              <RefreshControl
                onRefresh={() => refreshThread(comments)}
                refreshing={refreshing}
                tintColor={isDark ? mediumGrey : darkBlue} />
              } />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  loadingThread: {
    flex: 1
  },
  darkLoading: {
    backgroundColor: mediumBlack
  },
  spinner: {
    paddingTop: 40
  },
  threadWrapper: {
    height: SCREEN_HEIGHT
  },
  darkBackground: {
    backgroundColor: mediumBlack
  },
  listView: {
    marginBottom: 64
  }
})

export default Thread
