import React, { Component } from 'react'
import { Text, View, Navigator } from 'react-native'
import { connect, Provider } from 'react-redux'
import { fetchInitialData, changeView, changeTopic } from './redux/action-creators/settings'
import { refreshStories, refreshSavedStories, saveStory, unSaveStory } from './redux/action-creators/stories'
import SplashScreen from './components/generic/splash'
import Layout from './layout'
import SafariView from 'react-native-safari-view'
console.log('safar', SafariView);

class App extends Component {
  componentDidMount () {
    const {fetchInitialData, topics: { currentlySelected }} = this.props
    fetchInitialData(currentlySelected)
  }

  openSafari(url) {
    console.log('open', url);
    SafariView.isAvailable()
      .then(SafariView.show({
        url,
        readerMode: true,
        barTintColor: "#000"
      }))
  }

  render () {
    const {loading, title} = this.props

    return (
      <View style={{flex: 1}}>
        {loading && <SplashScreen />}
        {!loading && (
          <Navigator
            initialRoute={{index: 0}}
            renderScene={(route = {}, navigator) => {
              const { component, title: routeTitle, index, linkProps } = route
              return(
                <Layout
                  {...this.props}
                  navigator={navigator}
                  component={component}
                  title={routeTitle || title}
                  viewIndex={index}
                  isHome={!index}
                  linkProps={linkProps}
                  openSafari={(url) => this.openSafari(url)} />
              )
            }} />
        )}
      </View>
    )
  }
}

const mapStateToProps = ({settings, stories, savedStories}) => ({
   stories, savedStories, ...settings
 })

export default connect(mapStateToProps, {
  fetchInitialData,
  changeView,
  changeTopic,
  refreshStories,
  saveStory,
  unSaveStory,
  refreshStories,
  refreshSavedStories
})(App)
