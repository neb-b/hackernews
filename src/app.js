import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { loadStories } from './redux/action-creators/load-stories'
import Layout from './layout'
// import StatusBar from './components/status-bar'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadStories()
  }

  render() {
    const { error, loading, stories } = this.props
    return (
      <View style={styles.container}>
        {
          // <StatusBar />
        }
        {error && <Text>There was an error</Text>}
        <Layout loading={loading} stories={stories} loadStories={loadStories} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = (s) => {
  return {...s.stories}
}

export default connect(mapStateToProps, { loadStories })(App)
