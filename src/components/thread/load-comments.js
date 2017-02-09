import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

const LoadComments = ({
  kids,
  loadSubComments,
  id,
  commentChain,
  commentThatsLoading
}) => {
  const imLoading = commentThatsLoading === id
  return (
    <TouchableHighlight
      underlayColor='#dfdfdf'
      activeOpacity={.5}
      style={styles.viewComments}
      onPress={() => loadSubComments(id, commentChain, kids)}
    >
      <Text style={styles.viewCommentsText}>
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
    borderRadius: 10,
    paddingRight: 5,
    paddingLeft: 5
  },
  viewCommentsText: {
    color: '#125580',
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 16
  },
})

export default LoadComments
