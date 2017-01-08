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
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    borderBottomWidth: 1,
    borderColor: '#fff'
  },
  title: {
    color: '#f2f2f2',
    fontSize: 16
  }
})

export default Story
