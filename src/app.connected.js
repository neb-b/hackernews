import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import { loadSettings, changeView } from './redux/action-creators/settings'
import { Text, View } from 'react-native'
import SplashScreen from './components/generic/splash'
import Layout from './layout'

// Initialize App
class App extends Component {
  constructor () {
    super()
  }

  componentDidMount () {
    // Fetching initial settings from AsyncStorage
    const {loadSettings} = this.props
    loadSettings()
  }

  render () {
    const {loading} = this.props

    console.log('app', this.props);
    // Render full screen splash page while fetching settings from storage
    return (
      <View style={{flex: 1}}>
        {loading && <SplashScreen />}
        {!loading && <Layout {...this.props} />}
      </View>
    )
  }
}

const mapStateToProps = (s) => ({...s.settings})
export default connect(mapStateToProps, { loadSettings, changeView })(App)
