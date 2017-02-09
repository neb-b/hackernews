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
        style={styles.listView}
        dataSource={ds.cloneWithRows(stories)}
        renderRow={(story) => <Story key={story.id} {...story} navigator={navigator}/>}
        refreshControl={
          <RefreshControl
            onRefresh={refreshStories}
            refreshing={refreshing}
            tintColor='#12558060' />
          }>
      </ListView>
    </View>
  )
}

const styles = StyleSheet.create({
  listView: {
    marginBottom: 64 //IOS statusBar height
  }
})

export default ListOfStories
