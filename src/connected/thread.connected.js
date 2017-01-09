import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text
} from 'react-native'
import { loadComments } from '../redux/action-creators/load-comments'
import Thread from '../components/thread'

class ThreadView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { kids } = this.props
    this.props.loadComments(kids)
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

const mapStateToProps = (s) => {
  return {...s.thread}
}

export default connect(mapStateToProps, { loadComments })(ThreadView)
