import React, { Component } from 'react'
import { AsyncStorage, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { loadSettings } from './redux/action-creators/settings'
import { globalStyles } from './styles'
const { orange } = globalStyles

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { loadSettings } = this.props
    loadSettings()
  }

  render() {
    const { children, loading } = this.props
    return (
      <View style={[styles.app, loading && styles.placeholder]}>
        {!loading && children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  placeholder: {
    backgroundColor: orange
  }
})

const mapStateToProps = (s) => ({
  settings: s.settings
})

export default connect(mapStateToProps, { loadSettings })(App)
