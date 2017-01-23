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
  parents
}) => {
  return (
    <View>
      <TouchableHighlight
        underlayColor='#4e6c4c'
        style={styles.viewComments}
        onPress={() => loadSubComments(id, parents, kids)}
      >
      <Text style={styles.viewCommentsText}>
        {`${kids.length} repl${kids.length > 1 ? 'ies' : 'y'}`
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
