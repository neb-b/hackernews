import React from 'react'
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Settings from '../../connected/settings.connected'
import { globalStyles } from '../../styles.js'

const { darkBlue, blue, lightGrey, black, mediumBlack, orangeUnderlay, darkBlueUnderlay, darkGrey, white, lightBlack, veryLightGrey, blackUnderlay } = globalStyles
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Navigation = ({
  title,
  navigator,
  viewIndex,
  settings,
  outside,
  filterToggled,
  toggleFilter,
  changeTopic,
  filterSelected,
  filterOptions,
  isDark
}) => {
  const isHome = viewIndex === 0
  const showSettings = title !== 'Settings'

  return (
    <View style={[styles.statusBarWrapper, isDark && styles.darkStatusBar]}>
      <StatusBar barStyle='light-content' />
      <View style={styles.statusBar}>
        <View style={styles.navWidth}>
          { !isHome && (
              <Text
                style={[styles.navText, isDark && styles.darkNavText]}
                onPress={() => navigator.pop()}>
                Back
              </Text>
          )}
        </View>

        {isHome ? (
            <TouchableHighlight
              onPress={toggleFilter}
              underlayColor={isDark ? blackUnderlay : darkBlueUnderlay}
              activeOpacity={.8}
              style={[styles.toggleFilter]}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.navText, isDark && styles.darkNavText]}>{filterSelected.title}</Text>
                <Icon
                  name={filterToggled ? 'chevron-up' : 'chevron-down'}
                  style={styles.icon}
                  size={20}
                  color={white} />
              </View>
            </TouchableHighlight>
          )
          : <Text style={[styles.navText, outside && styles.url, isDark && styles.darkNavText]}>{title}</Text>
        }

        {filterToggled && (
          <TouchableHighlight
            onPress={toggleFilter}
            underlayColor={isDark ? mediumBlack : lightGrey}
            style={[styles.filterActiveOverlay]}>
            <View style={[styles.filterMenu, isDark && styles.darkFilterMenu]}>
              {
                filterOptions.map((option) => {
                  let selectedStyle
                  if (filterSelected.endpoint === option.endpoint) {
                    selectedStyle = isDark ? styles.darkSelectedOption : styles.selectedOption
                  }

                  return (
                    <View style={[styles.optionWrapper, isDark && styles.darkOptionWrapper]} key={option.endpoint}>
                      <TouchableHighlight
                        style={[
                          styles.option,
                          selectedStyle
                        ]}
                        onPress={() => changeTopic(option)}
                        underlayColor={isDark ? blackUnderlay : darkBlueUnderlay}
                        activeOpacity={.8}
                        >
                        <Text style={isDark && styles.darkOption}>{option.title}</Text>
                      </TouchableHighlight>
                    </View>
                  )
                })
              }
            </View>
          </TouchableHighlight>
        )}

        <View style={styles.navWidth}>
          {showSettings && isHome && (
            <TouchableHighlight
              underlayColor={isDark ? blackUnderlay : darkBlueUnderlay}
              activeOpacity={.8}
              onPress={() => {
                filterToggled && toggleFilter()
                navigator.push({
                    title: 'Settings',
                    component: Settings,
                    index: viewIndex + 1
                  })
              }}
            >
              <Icon
                name='dots-vertical'
                style={styles.settings}
                size={20}
                color={isDark ? veryLightGrey : white} />
            </TouchableHighlight>
          )}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  statusBarWrapper: {
    zIndex: 1,
    height: 64,
    paddingTop: 25,
    paddingLeft: 7,
    paddingRight: 7,
    backgroundColor: darkBlue
  },
  darkStatusBar: {
    backgroundColor: black
  },
  statusBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navWidth: {
    width: 100
  },
  navText: {
    color: white,
    fontSize: 20
  },
  darkNavText: {
    color: veryLightGrey
  },
  url: {
    paddingTop: 5,
    textAlign: 'center',
    fontSize: 14
  },
  settings: {
    textAlign: 'right'
  },
  icon: {
    paddingTop: 4,
    paddingLeft: 2,
  },
  filterActiveOverlay: {
    position: 'absolute',
    height: HEIGHT,
    width: WIDTH,
    marginTop: 38,
    marginLeft: -7,
    backgroundColor: blackUnderlay
  },
  filterMenu: {
    width: 150,
    marginTop: 1,
    marginLeft: (WIDTH / 2) - 75,
    backgroundColor: white,
  },
  darkFilterMenu: {
    backgroundColor: darkGrey
  },
  option: {
    padding: 20
  },
  darkOption: {
    color: veryLightGrey
  },
  selectedOption: {
    backgroundColor: orangeUnderlay
  },
  darkSelectedOption: {
    backgroundColor: lightBlack
  },
  settings: {
    alignSelf: 'flex-end',
    paddingTop: 5
  }
})

export default Navigation
