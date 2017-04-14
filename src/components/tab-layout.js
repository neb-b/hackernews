import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TabBarIOS
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../components/generic/button'
import Stories from '../components/stories'
import SavedStories from '../components/saved-stories'
import { saveStory, unSaveStory } from '../redux/action-creators/stories'

const TabBarLayout = ({
  viewIndex,
  changeView,
  viewingStories,
  navigator,
  topics,
  stories,
  savedStories,
  saveStory,
  unSaveStory,
  changeTopic
}) => {

  return (
    <TabBarIOS
      translucent
      unselectedTintColor='#d1d1d1'
      tintColor='white'
      barTintColor='#1e4858'>
      <Icon.TabBarItemIOS
        iconName='clock'
        title='Read it later'
        selected={!viewingStories}
        onPress={() => viewingStories && changeView()}>
        <SavedStories
          {...savedStories}
          viewIndex={viewIndex}
          navigator={navigator}
          saveStory={saveStory}
          unSaveStory={unSaveStory}
        />
      </Icon.TabBarItemIOS>

      <Icon.TabBarItemIOS
        iconName='newspaper'
        title='Stories'
        selected={viewingStories}
        onPress={() => !viewingStories && changeView()}>
        <Stories
          {...stories}
          viewIndex={viewIndex}
          navigator={navigator}
          saveStory={saveStory}
          unSaveStory={unSaveStory}
          topics={topics}
          changeTopic={changeTopic}
        />
      </Icon.TabBarItemIOS>
    </TabBarIOS>
    );
}


export default TabBarLayout
