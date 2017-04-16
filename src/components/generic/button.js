import React from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight, View, StyleSheet } from 'react-native'

const Button = ({
  _style,
  height,
  children,
  onPress,
  paddedLeft,
  paddedRight,
  paddedTop,
  paddedBottom,
  padded,
  flex,
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
        paddedBottom && styles.paddedBottom,
        height && {height}
      ]}>
        <View style={_style}>
          {children}
        </View>
    </TouchableHighlight>
  )
}

Button.defaultProps = {
  row: true
}

Button.propTypes = {
  row: PropTypes.bool
}

const styles = StyleSheet.create({
  button: {
    // flexDirection: 'row',
    // justifyContent: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  flex: {
    flex: 1
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
