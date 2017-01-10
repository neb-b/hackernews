import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text
} from 'react-native'

class WebView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <View>
        <Text>Web view</Text>
      </View>
    )
  }
}

const mapStateToProps = (s) => {
  return {...s.web}
}

export default connect(mapStateToProps, {})(WebView)
