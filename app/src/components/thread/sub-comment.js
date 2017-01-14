import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import moment from 'moment'
import HTMLView from 'react-native-htmlview'

const SubComment = (props) => {
  const { text, time, by } = props
  return (
    <View style={styles.subComment}>
      <HTMLView value={text} />
        <Text style={styles.info}>
          {moment(time * 1000).fromNow()}
          by {by}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subComment: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#eeeeee',
    borderRadius: 5
  },
  info: {
    paddingTop: 5,
    paddingBottom: 5,
    color: '#ff6300'
  }
})

export default SubComment
