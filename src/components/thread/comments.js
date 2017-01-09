import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native'
import Comment from './comment'

const Comments = (props) => {
  const { comments } = props
  console.log('comments', comments);
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

  return (
    <View style={styles.comments}>
      <ListView
        dataSource={ds.cloneWithRows(comments)}
        renderRow={(comment) => <Comment key={comment.id} {...comment} />}>
      </ListView>
    </View>
  )
}

const styles = StyleSheet.create({
  comments: {
    padding: 10,
    paddingRight: 15
  }
})

export default Comments
