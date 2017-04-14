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
        <Text style={[styles.title]}>{title}</Text>
        <Text style={[styles.url]}>{formatUrl(url)}</Text>

        <View style={styles.storyInfo}>
          <View>
            <Text style={styles.time}>{fromNow(time)}</Text>
            <Text style={[styles.score]}>{score || 0} points</Text>
          </View>
          <Link
            to='Thread'
            linkProps={story}
            navigator={navigator}
            viewIndex={viewIndex}
          >
            <Text style={styles.comments}>{descendants || 0} comments</Text>
          </Link>

          <Button onPress={() => saveAction(story)}>
            <Icon
              name={saved ? 'folder-remove' : 'clock' }
              size={20}
              color={saved ? '#ff6b6b' : 'black'} />
          </Button>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  story: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20
  }
})

export default Story
