import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ActivityIndicator,
  ListView,
  RefreshControl,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Story from './stories/story'

const Stories = ({
  loading,
  stories,
  loadStories,
  refreshing,
  refreshStories,
  navigator
}) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

  return (
    <View>
      {
        loading
        ? <ActivityIndicator
            style={styles.spinner}
            color='#125580'
            size='large'/>
        :  <ListView
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
      }
    </View>
  )
}

const styles = StyleSheet.create({
  spinner: {
    paddingTop: 40
  },
  listView: {
    marginBottom: 64 //IOS statusBar height
  }
})

export default Stories
