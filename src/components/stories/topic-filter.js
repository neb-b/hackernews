import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../generic/button'

const TopicFilter = () => {
  return (
    <View>
      <Button style={styles.button}>
        <Text>Selected topic</Text>
        <Icon name={'chevron-down'} size={20} color={'black'}/>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
  }
})

export default TopicFilter
