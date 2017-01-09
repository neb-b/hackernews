import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  StyleSheet
} from 'react-native'
import Head from './thread/head'
import Comments from './thread/comments'

const Thread = (props) => {
  const { title, score, url, time, kids, comments, loading } = props
  return (
    <View>
      <Head
        title={title}
        score={score}
        url={url}
        time={time}
        kids={kids} />
      {
        loading
        ? <ActivityIndicator />
        : <Comments comments={comments} />
      }
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Thread
