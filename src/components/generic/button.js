import React from 'react'
import { TouchableHighlight, View, StyleSheet } from 'react-native'

const Button = ({children, onPress, padded}) => {
  return (
    <TouchableHighlight onPress={onPress} style={[padded && styles.padded]}>
      <View style={[styles.button]}>
        {children}
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row'
  },
  padded: {
    padding: 10
  }
})

export default Button
