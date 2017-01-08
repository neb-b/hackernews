import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  StyleSheet
} from 'react-native'
import { loadStories } from '../redux/action-creators/load-stories'
import ListOfStories from './list-of-stories'



const Stories = ({ loading, stories, loadStories }) => {
  return (
    <View>
      {
        loading
        ? (<View style={styles.spinnerContainer}>
            <ActivityIndicator/>
          </View>)
        : <ListOfStories loadStories={loadStories} stories={stories} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  spinnerContainer: {
    // flex: 1,
    // // position: 'absolute',
    // // top: 0,
    // // bottom: 0,
    // // right: 0,
    // // left: 0,
    // // height: 200,
    // backgroundColor: 'red'
  }
})

export default connect(null, { loadStories })(Stories)
