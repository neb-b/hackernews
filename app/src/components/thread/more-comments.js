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
    id,
    parents
  } = props

  const imLoading = loadingSubComments && id


  console.log('parents');
  // console.log('commentFamily', commentFamily);

  return (
    <View>
      <TouchableHighlight
        underlayColor='#4e6c4c'
        activeOpacity={loadingSubComments ? 1 : .6}
        style={styles.viewComments}
        onPress={() => {loadSubComments(parents || [id], kids)}}
      >
      <Text style={styles.viewCommentsText}>
        {imLoading && 'Loading...'}
        {!imLoading && `${kids.length} repl${kids.length > 1 ? 'ies' : 'y'}`
        }
      </Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  viewComments: {
    marginTop: 10,
    borderColor: '#ffa55c',
    backgroundColor: '#fbfbfb',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10
  },
  viewCommentsText: {
    alignSelf: 'center',
    color: '#ffa55c',
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: '700'
  },
})

export default MoreComments
