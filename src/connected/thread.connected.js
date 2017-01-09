import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text
} from 'react-native'
// import { loadStories } from '../redux/action-creators/load-stories'
// import { refreshStories } from '../redux/action-creators/refresh-stories'
import Thread from '../components/thread'

class ThreadView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.props.loadStories()
  }

  render() {
    const { error } = this.props
    console.log('thread', this.props);
    return (
      <View>
        <Thread {...this.props} />
      </View>
    )
  }
}

// const mapStateToProps = (s) => {
//   return {...s.stories}
// }

export default ThreadView
