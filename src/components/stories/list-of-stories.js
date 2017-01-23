import React, { Component } from 'react'
import {
  View,
  ListView,
  StyleSheet,
  RefreshControl
} from 'react-native'
import Story from './story'

const ListOfStories = ({ stories, refreshStories, refreshing, navigator }) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

  return (
    <View>
      <ListView
        style={styles.scrollView}
        dataSource={ds.cloneWithRows(stories)}
        renderRow={(story) => <Story key={story.id} {...story} navigator={navigator}/>}
        refreshControl={
          <RefreshControl
            onRefresh={refreshStories}
            refreshing={refreshing}
            tintColor='#0C6A5A' />
          }>
      </ListView>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 64 //IOS statusBar height
  }
})

export default ListOfStories
