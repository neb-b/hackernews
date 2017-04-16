import React from 'react'
import { View, Text } from 'react-native'
import Button from '../generic/button'

const LoadReplies = (props) => {
  const {loadReplies, kids, isLoading, id, commentChain} = props
  return (
    <View>
      <Button onPress={() => loadReplies(id, commentChain, kids)}>
        <Text>
          {isLoading && 'Loading'}
          {!isLoading && `${kids.length} repl${kids.length > 1 ? 'ies' : 'y'}`}
        </Text>
      </Button>
    </View>
  )
}

export default LoadReplies
