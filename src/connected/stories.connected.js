import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { loadStories } from '../redux/action-creators/load-stories'
import { refreshStories } from '../redux/action-creators/refresh-stories'
import Stories from '../components/stories'
import StatusBar from '../components/status-bar'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadStories()
  }

  render() {
    const { error } = this.props
    return (
      <View style={styles.container}>
        {
          <StatusBar />
        }
        {error && <Text>There was an error</Text>}
        <Stories {...this.props} />
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

export default connect(mapStateToProps, { loadStories, refreshStories })(App)
