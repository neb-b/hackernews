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
      <Text style={[styles.url]}>{url && formatUrl(url)}</Text>
      <View style={styles.row}>
        <View>
          <Text style={[styles.time]}>{fromNow(time)}</Text>
          <Text style={[styles.comments]}>{descendants || 0} comments</Text>
          <Text size={16} style={[styles.score]}>{score} points</Text>
        </View>
        <View>
          <Button padded  _style={styles.save} onPress={() => saveAction(story)}>
            <Text alignRight bold color={'white'} size={12}>{`${saved ? 'Saved for' : 'Read it'} later`}</Text>
          </Button>
        </View>
      </View>
    </Button>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20
  },
  save: {
    backgroundColor: '#2d54cb',
    borderRadius: 10
  }
})

export default Thread
