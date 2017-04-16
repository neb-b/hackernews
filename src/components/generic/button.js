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
        height && {height},
        _style && _style
      ]}>
        <View>
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
    paddingLeft: 10
  },
  paddedRight: {
    paddingRight: 10
  },
  paddedTop: {
    paddingTop: 10
  },
  paddedBottom: {
    paddingBottom: 10
  }
})

export default Button
