import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import List from '../generic/list'
import Comment from './comment'

const Comments = ({comments, renderHeader}) => {
  return (
    <View style={styles.comments}>
      <List
        header={renderHeader}
        items={comments}
        renderItem={({item: comment}) => {
          return (<Comment {...comment} />)
        }}/>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Comments
