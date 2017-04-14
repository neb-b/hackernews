import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../generic/button'
import { titles } from '../../helpers/get-title'

class TopicFilter extends Component {
  constructor (props) {
    super(props)

    this.state = {dropdownOpen: false}
  }

  render () {
    const { topics, changeTopic } = this.props
    return (
      <View style={styles.filter}>
        <Button
          style={styles.button}
          onPress={() => this.setState({dropdownOpen: !this.state.dropdownOpen})}>
          <Text>{titles[topics.currentlySelected]}</Text>
          <Icon name={this.state.dropdownOpen ? 'chevron-up' : 'chevron-down'} size={20} color={'black'}/>
        </Button>
        {this.state.dropdownOpen && (
          <View style={styles.dropdown}>
            {topics.available.map((topic) => (
              <Button key={topic} onPress={() => changeTopic(topic)}>
                <Text>{titles[topic]}</Text>
              </Button>
            ))}
          </View>
        )}
      </View>
    )
  }
}

const FILTER_HEIGHT = 20

const styles = StyleSheet.create({

  button: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    height: FILTER_HEIGHT
  },
  dropdown: {
    backgroundColor: 'white',
    paddingBottom: 10
  }
})

export default TopicFilter
