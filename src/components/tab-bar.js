import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TabBarIOS
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from './generic/button'
import SavedStories from '../connected/stories.connected'
import Stories from '../connected/saved-stories.connected'

const TabBar = ({changeView, viewingStories}) => {
  return (
    <TabBarIOS
      translucent
      unselectedTintColor='#d1d1d1'
      tintColor='white'
      barTintColor='#1e4858'>
      <Icon.TabBarItemIOS
        iconName='clock'
        title="Read it later"
        selected={!viewingStories}
        onPress={() => viewingStories && changeView()}>
        <SavedStories />
      </Icon.TabBarItemIOS>

      <Icon.TabBarItemIOS
        iconName='newspaper'
        title='Stories'
        selected={viewingStories}
        onPress={() => !viewingStories && changeView()}>
        <Stories />
      </Icon.TabBarItemIOS>

    </TabBarIOS>
    );
}

const styles = StyleSheet.create({
  tabItem: {
    // fontSize: 40
  }
})

export default TabBar
