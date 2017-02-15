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
import { globalStyles } from '../../styles.js'

const { darkBlue, darkBlueUnderlay, white } = globalStyles
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Navigation = ({ title,
  navigator,
  viewIndex,
  settings,
  outside,
  filterToggled,
  toggleFilter,
  changeTopic,
  filterSelected,
  filterOptions
}) => {
  const isHome = viewIndex === 0
  return (
    <View style={styles.statusBarWrapper}>
      <StatusBar barStyle='light-content' />
      <View style={styles.statusBar}>
        <View style={styles.navWidth}>
          { !isHome && (
              <Text
                style={styles.navText}
                onPress={() => navigator.pop()}>
                Back
              </Text>
          )}
        </View>

        { isHome ? (
            <TouchableHighlight
              onPress={toggleFilter}
              underlayColor={darkBlueUnderlay}
              activeOpacity={.8}
              style={[styles.toggleFilter]}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.navText]}>{filterSelected.title}</Text>
                <Icon
                  name={filterToggled ? 'chevron-up' : 'chevron-down'}
                  style={styles.icon}
                  size={20}
                  color={white} />
              </View>
            </TouchableHighlight>
          )
          : <Text style={[styles.navText, outside && styles.url]}>{title}</Text>
        }

        {
          filterToggled && (
              <TouchableHighlight
                onPress={toggleFilter}
                style={[styles.filterActiveOverlay]}>
                <View style={styles.filterMenu}>
                  {
                    filterOptions.map((option) => (
                      <View style={styles.optionWrapper} key={option.endpoint}>
                        <TouchableHighlight
                          style={[styles.option, filterSelected.endpoint === option.endpoint && styles.selectedOption]}
                          onPress={() => changeTopic(option)}
                          underlayColor={darkBlueUnderlay}
                          activeOpacity={.8}
                          >
                          <Text>{option.title}</Text>
                        </TouchableHighlight>
                      </View>
                    ))
                  }
                </View>
              </TouchableHighlight>
          )
        }

        <View style={styles.navWidth}>
          {
            settings && (
              <Text style={[styles.navText, styles.settings]}>Settings</Text>
            )
          }
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
    height: HEIGHT - 64,
    width: WIDTH,
    marginTop: 38,
    marginLeft: -7,
    backgroundColor: '#6e6e6e30'
  },
  filterMenu: {
    width: 150,
    marginTop: 1,
    marginLeft: (WIDTH / 2) - 75,
    backgroundColor: '#fbfbfb',
  },
  option: {
    padding: 20,
  },
  selectedOption: {
    backgroundColor: '#B8DDF5'
  }
})

export default Navigation
