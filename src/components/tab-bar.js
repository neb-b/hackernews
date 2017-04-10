import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TabBarIOS
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from './generic/button'
import Stories from '../connected/stories.connected'
import SavedStories from '../connected/saved-stories.connected'

const TabBar = ({changeView, viewingStories, navigator}) => {
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
        <SavedStories navigator={navigator} />
      </Icon.TabBarItemIOS>

      <Icon.TabBarItemIOS
        iconName='newspaper'
        title='Stories'
        selected={viewingStories}
        onPress={() => !viewingStories && changeView()}>
        <Stories navigator={navigator} />
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
