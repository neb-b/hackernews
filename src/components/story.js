import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const Story = (props) => {
  const { title } = props
  console.log('story', props)

  return (
    <View style={styles.story}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  story: {
    padding: 20
  },
  title: {
    color: '#f2f2f2',
    fontSize: 16
  }
})

export default Story
