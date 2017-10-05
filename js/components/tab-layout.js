import React from "react";
import { View, TabBarIOS } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Stories from "../components/stories";
import SavedStories from "../components/saved-stories";

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
  changeTopic,
  refreshStories,
  refreshSavedStories,
  openSafari,
  height
}) => {
  return (
    <TabBarIOS
      translucent
      unselectedTintColor="#d1d1d1"
      tintColor="white"
      barTintColor="#2c3e50"
    >
      <Icon.TabBarItemIOS
        iconName="clock"
        title="Read it later"
        selected={!viewingStories}
        onPress={() => viewingStories && changeView()}
      >
        <SavedStories
          {...savedStories}
          viewIndex={viewIndex}
          navigator={navigator}
          saveStory={saveStory}
          unSaveStory={unSaveStory}
          refreshSavedStories={refreshSavedStories}
          openSafari={openSafari}
          height={height}
        />
      </Icon.TabBarItemIOS>
      <Icon.TabBarItemIOS
        iconName="newspaper"
        title="Stories"
        selected={viewingStories}
        onPress={() => !viewingStories && changeView()}
      >
        <Stories
          {...stories}
          viewIndex={viewIndex}
          navigator={navigator}
          saveStory={saveStory}
          unSaveStory={unSaveStory}
          topics={topics}
          changeTopic={changeTopic}
          refreshStories={refreshStories}
          openSafari={openSafari}
          height={height}
        />
      </Icon.TabBarItemIOS>
    </TabBarIOS>
  );
};

export default TabBarLayout;
