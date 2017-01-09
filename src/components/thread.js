import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  StyleSheet
} from 'react-native'
import ListOfStories from './stories/list-of-stories'
import Title from './thread/title'

const Thread = (props) => {
  console.log('thread', props);
  const { title } = props
  return (
    <View>
      <Title title={title} />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Thread
