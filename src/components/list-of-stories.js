import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native'
import Story from './story'

const ListOfStories = ({stories, loadStories}) => {
  return (
    <View>
      <ScrollView style={styles.scrollView}>
        {stories.map((story) => <Story key={story.id} {...story} />)}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    // flex: 1
  }
})

export default ListOfStories
