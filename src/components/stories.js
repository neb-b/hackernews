import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ActivityIndicator,
  Dimensions,
  ListView,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Story from './stories/story'
import { globalStyles } from '../styles'
const { mediumGrey, darkBlue, darkBlueUnderlay, whiteUnderlay, mediumBlack } = globalStyles

const HEIGHT = Dimensions.get('window').height

const Stories = ({
  loading,
  stories,
  loadStories,
  refreshing,
  refreshStories,
  navigator,
  openSafari,
  isDark
}) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

  return (
    <View style={[styles.storiesWrapper, isDark && styles.darkBackground]}>
      {
        loading
        ? <ActivityIndicator
            style={styles.spinner}
            color={isDark ? mediumGrey : darkBlue}
            size='large'/>
        :  <ListView
            style={styles.listView}
            dataSource={ds.cloneWithRows(stories)}
            renderRow={(story) => (
              <Story
                key={story.id}
                {...story}
                navigator={navigator}
                openSafari={openSafari}
                isDark={isDark}/>
            )}
            refreshControl={
              <RefreshControl
                onRefresh={refreshStories}
                refreshing={refreshing}
                tintColor={isDark ? mediumGrey : darkBlue} />
              }>
          </ListView>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  storiesWrapper: {
    zIndex: 0,
    height: HEIGHT,
  },
  darkBackground: {
    backgroundColor: mediumBlack
  },
  spinner: {
    paddingTop: 40,
  },
  listView: {
    marginBottom: 64 //IOS statusBar height
  }
})

export default Stories
