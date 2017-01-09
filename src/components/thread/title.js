import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import moment from 'moment'
import Thread from '../../connected/thread.connected'

const Title = (props) => {
  const { title } = props

  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Title
