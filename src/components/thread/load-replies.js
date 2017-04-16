import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../generic/button'

const LoadReplies = (props) => {
  const {loadReplies, kids, isLoading, id, commentChain} = props
  return (
    <View style={styles.container}>
      <Button _style={styles.button} onPress={() => loadReplies(id, commentChain, kids)}>
        <Text style={styles.buttonText}>
          {isLoading && 'Loading'}
          {!isLoading && `${kids.length} repl${kids.length > 1 ? 'ies' : 'y'}`}
        </Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  button: {
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#19467a'
  },
  buttonText: {
    textAlign: 'center',
    color: '#19467a'
  }
})

export default LoadReplies