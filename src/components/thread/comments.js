import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import List from '../generic/list'
import Comment from './comment'


const Comments = ({comments, refreshing, refreshThread, renderHeader}) => {
  return (
    <View >
      <List
        style={styles.comments}
        header={renderHeader}
        refreshing={refreshing}
        refresh={() => refreshThread(comments.map((comment) => comment.id))}
        items={comments}
        renderItem={({item: comment}) => {
          return (<Comment {...comment} />)
        }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  comments: {

    // height: HEIGHT
  }
})

export default Comments
