import React from 'react'
import {
  Switch,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import { globalStyles } from '../../styles.js'
const { black, orangeUnderlay, mediumGrey, lightGrey, veryLightGrey } = globalStyles

const Setting = ({name, active, onChange, isDark }) => {
  return (
    <TouchableHighlight
      onPress={onChange}
      underlayColor={orangeUnderlay}
      activeOpacity={.8}
      style={[styles.settingWrapper, isDark && styles.darkSetting]}>
      <View style={styles.setting}>
        <Text style={[styles.settingName, isDark && styles.darkText]}>{name}</Text>
        <Switch value={active} onChange={onChange} />
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  settingWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: lightGrey,
  },
  darkSetting: {
    borderBottomColor: mediumGrey
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  settingName: {
    fontSize: 20,
    color: black
  },
  darkText: {
    color: veryLightGrey
  }
})

export default Setting
