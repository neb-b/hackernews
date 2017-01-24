import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  ScrollView
} from 'react-native'
import Head from './thread/head'
import Comment from './thread/comment'

const Thread = (props) => {
  const {
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
    commentThatsLoading
  } = props

  const renderHead = () => {
    return (
      <Head
        navigator={navigator}
        key={0}
        title={title}
        score={score}
        time={time}
        descendants={descendants}
        url={url} />
    )
  }

  const renderComment = (comment) => (
    <Comment
      key={comment.id}
      {...comment}
      loadSubComments={loadSubComments}
      commentThatsLoading={commentThatsLoading} />
  )

  const renderComments = () => loading
    ? <ActivityIndicator
        key={1}
        style={styles.spinner}
        color='#125580'
        size='large'/>
    : comments.map(renderComment)

  return (
    <View>
      <ScrollView style={styles.scrollView}>
        {[renderHead(), renderComments()]}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  spinner: {
    paddingTop: 40
  },
  scrollView: {
    marginBottom: 64
  }
})

export default Thread
