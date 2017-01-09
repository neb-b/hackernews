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

const Thread = (props) => {
  console.log('thread', props);
  const { title, score, url, time, kids } = props
  return (
    <View>
      <Head
        title={title}
        score={score}
        url={url}
        time={time}
        kids={kids}/>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Thread
