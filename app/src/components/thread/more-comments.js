import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import SubComments from './sub-comments'

const MoreComments = (props) => {
  const {
    brothers,
    loadSubComments,
    loadingSubComments,
    subCommentsParent,
    subComments,
    parentId
  } = props

  return (
    <View>
      {!subComments && brothers && brothers.length && (
        <TouchableHighlight
          underlayColor='#4e6c4c'
          activeOpacity={loadingSubComments ? 1 : .6}
          style={styles.viewComments}
          onPress={() => !loadingSubComments && loadSubComments(parentId, brothers)}
        >
        <Text style={styles.viewCommentsText}>
          {
            loadingSubComments && parentId === subCommentsParent
              ? 'Loading...'
              : `${brothers.length} comments`
          }
        </Text>
        </TouchableHighlight>
      )}
      {subComments && (
          <SubComments comments={subComments} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  viewComments: {
    marginTop: 10,
    backgroundColor: '#fb7b13',
    borderRadius: 5
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
