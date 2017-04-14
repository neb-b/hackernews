import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { formatUrl, fromNow } from '../../helpers/story-helpers'

const Thread = ({
  loading,
  title,
  score,
  time,
  url,
  descendants
}) => {
  return (
    <View style={styles.head}>
      <Text>{title}</Text>
      <Text style={[styles.url]}>{url && formatUrl(url)}</Text>
      <Text style={[styles.time]}>{fromNow(time)}</Text>

      <Text style={[styles.score]}>{score} points</Text>
      <Text style={[styles.comments]}>{descendants} comments</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Thread
