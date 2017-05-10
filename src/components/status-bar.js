import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  StatusBar
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from './generic/button'
import SafariView from 'react-native-safari-view'

class StatusBarWrapper extends Component {
  componentDidMount() {
    SafariView.addEventListener('onShow', () => StatusBar.setBarStyle("dark-content"))
    SafariView.addEventListener('onDismiss', () => StatusBar.setBarStyle("light-content"))
  }

  render() {
    const {title, showBackArrow, navigator, isHome} = this.props
    return (
      <View style={styles.statusBar}>
        <StatusBar barStyle='light-content' />
        <View style={styles.row}>
          <View style={styles.item}>
            {!isHome && (
              <Button paddedLeft underlayColor='#009688' _style={styles.icon} onPress={() => navigator.pop()}>
                <Icon
                  name={'arrow-left'}
                  size={20}
                  color={'white'} />
              </Button>
            )}
          </View>
          <View style={[styles.titleContainer]}>
            <Text style={[styles.title]}>{title}</Text>
          </View>
          <View style={styles.item}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: 64,
    paddingTop: 25,
    backgroundColor: '#009688',
  },
  row: {
    flexDirection: 'row'
  },
  item: {
    width: 50
  },
  titleContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  icon: {
    paddingTop: 3
  }
})

export default StatusBarWrapper
