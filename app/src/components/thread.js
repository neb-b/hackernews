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
    loadingSubComments,
    subCommentsParent,
  } = props

  const renderHead = () => {
    console.log('rendering head');
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
      loadingSubComments={loadingSubComments}
      subCommentsParent={subCommentsParent} />
  )

  return (
    <View>
      {
        loading
        ? (<View>
            {renderHead()}
            <ActivityIndicator
              style={styles.spinner}
              color='#66a3b4'
              size='large'/>
          </View>)
        : (
          <ScrollView style={styles.scrollView}>
            {[renderHead(), comments.map(renderComment)]}
          </ScrollView>
        )
      }
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
