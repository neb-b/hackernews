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
  parents,
  commentThatsLoading
}) => {
  const imLoading = commentThatsLoading === id
  return (
    <TouchableHighlight
        underlayColor='#dfdfdf'
        activeOpacity={.5}
        style={styles.viewComments}
        onPress={() => loadSubComments(id, parents, kids)}
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
    color: '#1d1d1d',
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: '700',
    fontSize: 18
  },
})

export default LoadComments
