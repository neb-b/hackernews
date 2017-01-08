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
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  story: {
    padding: 20
  }
})

export default Story
