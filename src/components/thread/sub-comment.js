import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import HTMLView from 'react-native-htmlview'

const SubComment = ({text}) => (
  <View style={styles.subComment}>
    <HTMLView value={text} />
  </View>
)

const styles = StyleSheet.create({
  subComment: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5
  }
})

export default SubComment
