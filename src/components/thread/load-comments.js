import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import { globalStyles } from '../../styles.js'
const { darkBlue, white, blackUnderlay, darkBlueUnderlay, lightBlack, orange } = globalStyles

const LoadComments = ({
  kids,
  loadSubComments,
  id,
  commentChain,
  commentThatsLoading,
  isDark
}) => {
  const imLoading = commentThatsLoading === id
  return (
    <TouchableHighlight
      underlayColor={isDark ? blackUnderlay : darkBlueUnderlay}
      style={[styles.viewComments, isDark && styles.darkViewComments]}
      onPress={() => loadSubComments(id, commentChain, kids)}
    >
      <Text style={[styles.viewCommentsText, isDark && styles.darkViewCommentsText]}>
        {
          imLoading
          ? 'Loading...'
          : `${kids.length} repl${kids.length > 1 ? 'ies' : 'y'}`
        }
      </Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  viewComments: {
    marginTop: 5,
    marginBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
    borderRadius: 10,
    backgroundColor: white
  },
  darkViewComments: {
    backgroundColor: lightBlack
  },
  viewCommentsText: {
    color: darkBlue,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    textAlign: 'center'
  },
  darkViewCommentsText: {
    color: orange
  }
})

export default LoadComments
