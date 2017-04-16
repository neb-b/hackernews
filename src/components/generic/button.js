import React from 'react'
import { TouchableHighlight, View, StyleSheet } from 'react-native'

const Button = ({
  children,
  onPress,
  paddedLeft,
  paddedRight,
  paddedTop,
  paddedBottom,
  padded
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor='#66dfaa'
      style={[
        padded && styles.padded,
        paddedLeft && styles.paddedLeft,
        paddedRight && styles.paddedRight,
        paddedTop && styles.paddedTop,
        paddedBottom && styles.paddedBottom
      ]}>
      <View style={[styles.button]}>
        {children}
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    // justifyContent: 'center'
  },
  padded: {
    padding: 10
  },
  paddedLeft: {
    padding: 10
  },
  paddedRight: {
    padding: 10
  },
  paddedTop: {
    padding: 10
  },
  paddedBottom: {
    padding: 10
  }
})

export default Button
