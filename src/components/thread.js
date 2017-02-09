import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  ListView
} from 'react-native'
import Head from './thread/head'
import Comment from './thread/comment'

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
  toggleComment
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
      url={url} />
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
        <ListView
          style={styles.listView}
          dataSource={ds.cloneWithRows(threadItems)}
          renderRow={renderThreadRow} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  spinner: {
    paddingTop: 40
  },
  listView: {
    marginBottom: 64
  }
})

export default Thread
