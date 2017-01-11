import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import SubComment from './sub-comment'

const SubComments = ({comments}) => (
  <View style={styles.subComments}>
    {
      comments.map((comment) => <SubComment key={comment.id} {...comment} />)
    }
  </View>
)

const styles = StyleSheet.create({
  padding: 5
})

export default SubComments
