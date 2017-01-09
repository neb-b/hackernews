import React, { Component } from 'react'
import {
  View,
  ListView,
  StyleSheet,
  RefreshControl
} from 'react-native'
import Story from './story'

const ListOfStories = ({ stories, refreshStories, refreshing }) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  return (
    <View>
      <ListView
        style={styles.scrollView}
        dataSource={ds.cloneWithRows(stories)}
        renderRow={(story) => <Story key={story.id} {...story} />}
        refreshControl={
          <RefreshControl
            onRefresh={refreshStories}
            refreshing={refreshing}
            tintColor='#66a3b4' />
          }>
      </ListView>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    // flex: 1
  }
})

export default ListOfStories
