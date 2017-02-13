import React from 'react'
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Nav = ({ title,
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
                style={styles.text}
                onPress={() => navigator.pop()}>
                Back
              </Text>
          )}
        </View>

        { isHome ? (
            <TouchableHighlight
              onPress={toggleFilter}
              underlayColor='#12558030'
              activeOpacity={.8}
              style={[styles.toggleFilter]}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.text]}>{filterSelected.title}</Text>
                <Icon
                  name={filterToggled ? 'chevron-up' : 'chevron-down'}
                  style={styles.icon}
                  size={20}
                  color="#f1f1f1" />
              </View>
            </TouchableHighlight>
          )
          : <Text style={[styles.text, outside && styles.title]}>{title}</Text>
        }

        {
          filterToggled && (
              <TouchableHighlight
                onPress={toggleFilter}
                style={[styles.filterActiveOverlay]}>
                <View style={styles.filterMenu}>
                  {
                    filterOptions.map((option) => (
                      <View style={styles.optionWrapper}>
                        <TouchableHighlight
                          style={[styles.option, filterSelected.endpoint === option.endpoint && styles.selectedOption]}
                          key={option.endpoint}
                          onPress={() => changeTopic(option)}
                          underlayColor='#12558030'
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
              <Text style={[styles.text, styles.settings]}>Settings</Text>
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
    backgroundColor: '#125580'
  },
  statusBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navWidth: {
    width: 100
  },
  text: {
    color: '#f2f2f2',
    fontSize: 20
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 5
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
    marginLeft: -7, //TODO: this is bad
    backgroundColor: '#6e6e6e30'
  },
  filterMenu: {
    width: 150,
    marginTop: 1,
    marginLeft: (WIDTH / 2) - 75,
    backgroundColor: '#fbfbfb',
  },
  optionWrapper: {
    backgroundColor: '#fbfbfb',
  },
  option: {
    padding: 20,
  },
  selectedOption: {
    backgroundColor: '#bddbff'
  }
})

export default Nav
