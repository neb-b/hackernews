import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ActivityIndicator,
  ListView,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Head from './thread/head'
import Comment from './thread/comment'
import Dimensions from 'Dimensions'
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
  openSafari
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
      openSafari={openSafari} />
  )

  const renderThreadRow = (threadItem) => {
    return (
      threadItem.title
      ? <Head
          key={0}
          {...threadItem}
          navigator={navigator} />
      : <Comment
          key={threadItem.id}
          {...threadItem}
          loadSubComments={loadSubComments}
          commentThatsLoading={commentThatsLoading}
          toggleComment={toggleComment} />
    )
  }

  return (
    <View>
      {loading && (
        <View>
          {renderHead()}
          <ActivityIndicator
              key={1}
              style={styles.spinner}
              color='#125580'
              size='large' />
        </View>
      )}
      {!loading && (
        <View style={styles.threadWrapper}>
          <ListView
            style={styles.listView}
            dataSource={ds.cloneWithRows(threadItems)}
            renderRow={renderThreadRow}refreshControl={
              <RefreshControl
                onRefresh={() => refreshThread(comments)}
                refreshing={refreshing}
                tintColor='#12558060' />
              } />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  spinner: {
    paddingTop: 40
  },
  threadWrapper: {
    height: SCREEN_HEIGHT
  },
  listView: {
    marginBottom: 64
  }
})

export default Thread
