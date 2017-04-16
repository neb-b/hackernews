import React from 'react'
import { Text as NativeText, StyleSheet } from 'react-native'

const Text = ({children, bold, size, _style, alignRight}) => (
  <NativeText style={[
      styles.font,
      bold && styles.bold,
      alignRight && {textAlign: 'right'},
      {fontSize: size},
      _style
    ]}
  >
    {children}
  </NativeText>
)

const styles = StyleSheet.create({
  font: {
    fontFamily: 'AppleSDGothicNeo-Medium'
  },
  bold: {
    fontFamily: 'AppleSDGothicNeo-Bold'
  }
})

export default Text
