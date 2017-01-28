import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { loadComments, loadSubComments } from '../redux/action-creators/load-comments'
import { toggleReplies } from '../redux/action-creators/toggle-replies'
import Thread from '../components/thread'

class ThreadView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // const { kids } = this.props
    // this.props.loadComments(kids)
  }

  render() {
    const { error } = this.props

    return (
      <View>
        {error && <Text>There was an error</Text>}
        <Thread {...this.props}/>
      </View>
    )
  }
}

const mapStateToProps = (s) => {
  return {...s.thread}
}

export default connect(
  mapStateToProps,
  { loadComments, loadSubComments, toggleReplies }
)(ThreadView)
