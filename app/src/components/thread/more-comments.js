import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

const MoreComments = (props) => {
  const {
    kids,
    loadSubComments,
    loadingSubComments,
    subCommentsParent,
    subComments,
    parentId
  } = props

  return (
    <View>
      <TouchableHighlight
        underlayColor='#4e6c4c'
        activeOpacity={loadingSubComments ? 1 : .6}
        style={styles.viewComments}
        onPress={() => !loadingSubComments && loadSubComments(parentId, kids)}
      >
      <Text style={styles.viewCommentsText}>
        {
          loadingSubComments && parentId === subCommentsParent
            ? 'Loading...'
            : `${kids.length} comments`
        }
      </Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  viewComments: {
    marginTop: 10,
    backgroundColor: '#fb7b13',
    borderRadius: 5,
    marginRight: 5
  },
  viewCommentsText: {
    alignSelf: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    color: '#fff',
    fontWeight: '700'
  },
})

export default MoreComments
