import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

const MoreComments = ({
  kids,
  loadSubComments,
  id,
  parents,
  commentThatsLoading
}) => {
  const imLoading = commentThatsLoading === id
  return (
    <View>
      <TouchableHighlight
        underlayColor='#d97238'
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
    </View>
  )
}

const styles = StyleSheet.create({
  viewComments: {
    margin: 10,
    borderRadius: 10
  },
  viewCommentsText: {
    alignSelf: 'center',
    color: '#1d1d1d',
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: '700',
    fontSize: 18
  },
})

export default MoreComments
