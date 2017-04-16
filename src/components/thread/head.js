import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from '../generic/text'
import Button from '../generic/button'
import { formatUrl, fromNow } from '../../helpers/story-helpers'

const Thread = ({
  loading,
  title,
  score,
  time,
  url,
  descendants,
  saved,
  saveAction,
  story,
  openSafari
}) => {
  return (
    <Button _style={styles.container} onPress={() => openSafari(url)}>
      <Text bold size={32}>{title}</Text>
      <View style={styles.row}>
        <View>
          <Text style={[styles.url]}>{url && formatUrl(url)}</Text>
          <Text style={[styles.time]}>{fromNow(time)}</Text>

          <Text style={[styles.comments]}>{descendants || 0} comments</Text>

        </View>
        <View>
          <Text alignRight size={16} style={[styles.score]}>{score} points</Text>
          <Button onPress={() => saveAction(story)}>
            <Text alignRight size={22}>{`${saved ? 'Saved for' : 'Read it'} later`}</Text>
          </Button>
        </View>
      </View>
    </Button>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30
  }
})

export default Thread
