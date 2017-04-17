import React from 'react'
import {
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import Text from '../generic/text'
import Link from '../generic/link'
import Button from '../generic/button'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { formatUrl, fromNow } from '../../helpers/story-helpers'

const Story = ({
  story,
  isSavedView,
  saveAction,
  navigator,
  viewIndex,
  openSafari,
  height
}) => {
  const {
    title,
    time,
    score,
    descendants,
    url,
    saved
  } = story

  const WrapperEl = url ? Button : Link

  return (
    <WrapperEl
      onPress={() => url && openSafari(url)}
      to='Thread'
      linkProps={{story, height}}
      navigator={navigator}
      viewIndex={viewIndex}
      >
      <View style={styles.story}>
        <View style={styles.row}>
          <Text bold size={32} _style={[styles.title]}>{title}</Text>
          <Button
            height={40}
            paddedLeft
            onPress={() => saveAction(story)}>
            <Icon
              name={saved ? 'folder-remove' : 'clock' }
              size={20}
              color={saved ? '#ff6b6b' : 'black'} />
          </Button>
        </View>

        <View style={[styles.row, styles.postInfo]}>
          <View>
            <Text style={styles.url}>{formatUrl(url)}</Text>
            <Text style={styles.time}>{fromNow(time)}</Text>
            <Text size={18} style={styles.score}>{score || 0} points</Text>
          </View>

          <Link
            _style={styles.comments}
            to='Thread'
            linkProps={{story, height}}
            navigator={navigator}
            viewIndex={viewIndex}
            >
            <Text bold size={18}>{descendants || 0} comments</Text>
          </Link>
        </View>
      </View>
    </WrapperEl>
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
  title: {
    flex: 1,
    flexWrap: 'wrap',
  },
  saveAction: {
    paddingLeft: 20
  },
  postInfo: {
    paddingTop: 30
  },
  comments: {
    paddingLeft: 10,
    paddingBottom: 10
  }
})

export default Story
