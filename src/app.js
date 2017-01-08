import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { loadStories } from './redux/action-creators/load-stories'
import Layout from './layout'

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
          // <NavBar />
        }
        {error && <Text>There was an error</Text>}
        <Layout loading={loading} stories={stories} />
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
