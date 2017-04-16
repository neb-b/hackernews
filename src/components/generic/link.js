import React from 'react'
import { StyleSheet, View, TouchableHighlight } from 'react-native'
import Thread from '../../connected/thread.connected'

const getScene = (title, linkProps) => {
  const components = {
    Thread
  }

  return {
    title,
    linkProps,
    component: components[title]
  }
}

const Link = ({navigator, children, to: newView, viewIndex, linkProps, _style}) => (
  <TouchableHighlight
    onPress={() => navigator.push(
      Object.assign({}, getScene(newView, linkProps), { index: viewIndex + 1})
    )}>
    <View style={_style}>
      {children}
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: 'black'
  }
})

export default Link