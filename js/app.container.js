import React, { Component } from "react";
import { View } from "react-native";
import { Navigator } from "react-native-deprecated-custom-components";
import { connect, Provider } from "react-redux";
import {
  fetchInitialData,
  changeView,
  changeTopic
} from "./redux/action-creators/settings";
import {
  refreshStories,
  refreshSavedStories,
  saveStory,
  unSaveStory
} from "./redux/action-creators/stories";
import SplashScreen from "./components/generic/splash";
import Error from "./components/generic/error";
import Layout from "./layout";
import SafariView from "react-native-safari-view";

class App extends Component {
  componentDidMount() {
    const { fetchInitialData, topics: { currentlySelected } } = this.props;
    fetchInitialData(currentlySelected);
  }

  openSafari(url) {
    SafariView.show({
      url
    });
  }

  render() {
    const {
      loading,
      title,
      error,
      fetchInitialData,
      topics: { currentlySelected }
    } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {error && <Error refresh={() => fetchInitialData(currentlySelected)} />}
        {loading && <SplashScreen />}
        {!loading &&
          <Navigator
            initialRoute={{ index: 0 }}
            renderScene={(route = {}, navigator) => {
              const { component, title: routeTitle, index, linkProps } = route;
              return (
                <Layout
                  {...this.props}
                  navigator={navigator}
                  component={component}
                  title={routeTitle || title}
                  viewIndex={index}
                  isHome={!index}
                  linkProps={linkProps}
                  openSafari={url => SafariView.show({ url })}
                />
              );
            }}
          />}
      </View>
    );
  }
}

const mapStateToProps = ({ settings, stories, savedStories }) => ({
  stories,
  savedStories,
  ...settings
});

export default connect(mapStateToProps, {
  fetchInitialData,
  changeView,
  changeTopic,
  refreshStories,
  saveStory,
  unSaveStory,
  refreshStories,
  refreshSavedStories
})(App);
