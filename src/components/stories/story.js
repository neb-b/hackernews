import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import Link from '../generic/link'
import Button from '../generic/button'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { formatUrl, fromNow } from '../../helpers/story-helpers'

const Story = ({
  story,
  isSavedView,
  saveAction,
  navigator,
  viewIndex
}) => {
  const {
    title,
    time,
    score,
    descendants,
    url,
    saved
  } = story
  return (
      <View style={styles.story}>
        <View style={[styles.row, styles.level1]}>
          <Text style={[styles.title]}>{title}</Text>
          <Button
            paddedLeft
            onPress={() => saveAction(story)}>
            <Icon
              name={saved ? 'folder-remove' : 'clock' }
              size={20}
              color={saved ? '#ff6b6b' : 'black'} />
          </Button>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={[styles.url]}>{formatUrl(url)}</Text>
            <Text style={styles.time}>{fromNow(time)}</Text>
            <Text style={[styles.score]}>{score || 0} points</Text>
          </View>
          <View style={styles.commentsContainer}>
            <Link
              style={styles.comments}
              to='Thread'
              linkProps={story}
              navigator={navigator}
              viewIndex={viewIndex}
              >
              <Text>{descendants || 0} comments</Text>
            </Link>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  story: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    minHeight: 150,
    borderTopWidth: 1,
    borderTopColor: '#ebebeb'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  level1: {
    paddingBottom: 20
  },
  title: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 32,
    // fontWeight: '700',
  },
  saveAction: {
    paddingLeft: 20
  },
  commentsContainer: {
    flexDirection: 'column'
  },
  comments: {
    alignSelf: 'flex-end'
  }
})

export default Story
