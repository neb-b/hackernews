import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HTMLView from 'react-native-htmlview'
import moment from 'moment'
import { fromNow } from '../../helpers/story-helpers'

const Comment = (props) => {
  const {
    text,
    by,
    time,
    deleted,
    kids,
    showComment
  } = props

  return (
    <View style={styles.comment}>
      {!showComment && !deleted && (
        <View>
          <HTMLView
            value={text}
            onLinkPress={(url) => {}}
            stylesheet={htmlStyles}
          />
          <Text style={[styles.commentInfo]}>
            {`${by} `}
            {moment(time * 1000).fromNow()}
          </Text>

          {kids && kids.length && typeof kids[0] === 'number' && (
            <Text>{`${kids.length} repl${kids.length > 1 ? 'ies' : 'y'}`}</Text>
          )}
        </View>
      )}

      { deleted && <Text>deleted</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  comment: {
    marginTop: 10,
    padding: 10,
  },
  commentInfo: {
    paddingTop: 10
  }
})

const htmlStyles = StyleSheet.create({

})

export default Comment
