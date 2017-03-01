import React from 'react'
import {
  ListView,
  StyleSheet,
  View,
  Text
} from 'react-native'
import Setting from './settings/setting'
import Dimensions from 'Dimensions'
const SCREEN_HEIGHT = Dimensions.get('window').height
import { globalStyles } from '../styles'
const { mediumBlack } = globalStyles

const Settings = (props) => {
  const { settings, updateSettings } = props
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

  const isDark = settings[0].active // yikes... need to change settings to object

  return (
    <View style={[styles.settingsList, isDark && styles.darkSettings]}>
      {
        settings.map(({id, name, active}) => (
          <Setting
            key={id}
            onChange={() => updateSettings(id, !!active)}
            name={name}
            active={active}
            isDark={isDark}
          />
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  settingsList: {
    flex: 1,
  },
  darkSettings: {
    backgroundColor: mediumBlack
  }
})

export default Settings
