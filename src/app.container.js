import React, { Component } from 'react'
import { Text, View, Navigator } from 'react-native'
import { connect, Provider } from 'react-redux'
import { fetchInitialData, changeView, changeTopic } from './redux/action-creators/settings'
import SplashScreen from './components/generic/splash'
import Layout from './layout'

class App extends Component {
  componentDidMount () {
    const {fetchInitialData, topics: { currentlySelected }} = this.props
    fetchInitialData(currentlySelected)
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
                  linkProps={linkProps}/>
              )
            }} />
        )}
      </View>
    )
  }
}

const mapStateToProps = ({settings, stories, savedStories}) => ({
   ...settings, stories, savedStories
 })

export default connect(mapStateToProps, { fetchInitialData, changeView, changeTopic })(App)
