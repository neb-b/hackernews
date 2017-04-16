import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../generic/button'
import Text from '../generic/text'
import { titles } from '../../helpers/get-title'
import Collapsible from 'react-native-collapsible';

class TopicFilter extends Component {
  constructor (props) {
    super(props)

    this.state = { isCollapsed: true }
  }

  render () {
    const { topics, changeTopic } = this.props
    const { currentlySelected } = topics

    return (
      <View style={styles.filter}>
        <Button
          _style={styles.button}
          onPress={() => this.setState({isCollapsed: !this.state.isCollapsed})}>
          <Text>{titles[topics.currentlySelected]}</Text>
          <Icon name={this.state.isCollapsed ? 'chevron-up' : 'chevron-down'} size={20} color={'black'}/>
        </Button>
        <Collapsible collapsed={this.state.isCollapsed}>
          <View>
            {topics.available.map((topic) => (
              <View key={topic}>
                <Button padded onPress={() => topic !== currentlySelected ?  changeTopic(topic) : this.setState({isCollapsed: true})}>
                  <Text _style={[styles.topic, topic === currentlySelected && styles.selected]} size={20} bold>{titles[topic]}</Text>
                </Button>
              </View>
            ))}
          </View>
        </Collapsible>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    padding: 5
  },
  topic: {
    textAlign: 'right'
  },
  selected: {
    color: '#e24820'
  }
})

export default TopicFilter
