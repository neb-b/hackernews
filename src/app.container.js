import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import { fetchInitialData, changeView } from './redux/action-creators/settings'
import { Text, View, Navigator } from 'react-native'
import SplashScreen from './components/generic/splash'
import Layout from './layout'

class App extends Component {
  constructor () {
    super()
  }

  componentDidMount () {
    const {fetchInitialData, topics: { currentlySelected }} = this.props
    fetchInitialData(currentlySelected)
  }

  render () {
    const {loading} = this.props

    return (
      <View style={{flex: 1}}>
        {loading && <SplashScreen />}
        {!loading && (
          <Navigator
            renderScene={(route = {}, navigator) => (
              <Layout {...this.props} navigator={navigator} route={route} overwriteTitle={route.title}/>
            )} />
        )}
      </View>
    )
  }
}

const mapStateToProps = (s) => ({...s.settings})
export default connect(mapStateToProps, { fetchInitialData, changeView })(App)
