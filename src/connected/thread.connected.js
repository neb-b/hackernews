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
import SafariView from 'react-native-safari-view'

class ThreadView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { loadComments, kids = [] } = this.props
    loadComments(kids)
  }

  _openSafari(url) {
    SafariView.isAvailable()
      .then(SafariView.show({ url }))
  }

  render() {
    const { error, loadComments, kids } = this.props

    return (
      <View>
        {error && <Error refresh={() => loadComments(kids)} />}
        <Thread {...this.props} openSafari={this._openSafari}/>
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
