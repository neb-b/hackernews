import React from 'react'
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  StyleSheet
} from 'react-native'
import Story from './story'

const Stories = ({loading, stories}) => {
  console.log('stories', stories)
  return (
    <View>
      {
        loading
        ? <ActivityIndicator />
        : (<ScrollView
            onScroll={() => { console.log('onScroll!'); }}
            scrollEventThrottle={200}
            style={styles.scrollView}>
            {stories.map((story) => <Story key={story.id} {...story} />)}
          </ScrollView>)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    // flex: 1
  }
})

export default Stories
