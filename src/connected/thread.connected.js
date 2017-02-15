import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { loadComments,
  loadSubComments,
  refreshThread,
  toggleComment
} from '../redux/action-creators/thread'
import Thread from '../components/thread'
import Error from '../components/global/error'

class ThreadView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { loadComments, kids = [] } = this.props
    loadComments(kids)
  }

  render() {
    const { error, loadComments, kids } = this.props

    return (
      <View>
        {error && <Error refresh={() => loadComments(kids)} />}
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
  { loadComments, loadSubComments, toggleComment, refreshThread }
)(ThreadView)
