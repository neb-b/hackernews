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
    descendants
  } = props

  const headProps = { title, score, time, descendants }
  const threadItems = [headProps].concat(comments)
  const renderThread = (props, index) =>
    index === 0
    ? <Head key={0} {...headProps}/>
    : <Comment key={props.id} {...props} />

  return (
    <View>
      {
        loading
        ? (<View>
            <Head {...headProps} />
            <ActivityIndicator
              style={styles.spinner}
              color='#66a3b4'
              size='large'/>
          </View>)
        : (<ScrollView style={styles.scrollView}>
            {threadItems.map(renderThread)}
          </ScrollView>)
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
