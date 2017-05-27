import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../generic/button'
import Text from '../generic/text'
import { titles } from '../../helpers/get-title'
import Collapsible from 'react-native-collapsible'

class TopicFilter extends Component {
	constructor(props) {
		super(props)

		this.state = { isCollapsed: true }
	}

	render() {
		const { topics, changeTopic } = this.props
		const { currentlySelected } = topics

		return (
			<View>
				<Button
					_style={styles.button}
					onPress={() =>
						this.setState({ isCollapsed: !this.state.isCollapsed })}
				>
					<View style={styles.buttonText}>
						<Text>{titles[topics.currentlySelected]}</Text>
						<View style={styles.dropDownIcon}>
							<Icon
								name={this.state.isCollapsed ? 'chevron-down' : 'chevron-up'}
								size={20}
								color={'black'}
							/>
						</View>
					</View>
				</Button>
				<Collapsible collapsed={this.state.isCollapsed}>
					<View>
						{topics.available.map(topic => {
							const isSelected = topic === currentlySelected
							return (
								<View
									key={topic}
									style={isSelected && styles.selectedContainer}
								>
									<Button
										underlayColor="#169f8430"
										_style={{ padding: 20 }}
										onPress={() =>
											!isSelected
												? changeTopic(topic)
												: this.setState({ isCollapsed: true })}
									>
										<Text
											bold={isSelected}
											_style={[styles.topic, isSelected && styles.selected]}
											size={20}
										>
											{titles[topic]}
										</Text>
									</Button>
								</View>
							)
						})}
					</View>
				</Collapsible>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	buttonText: {
		alignSelf: 'flex-end',
		flexDirection: 'row',
		paddingTop: 5
	},
	dropDownIcon: {
		marginTop: -1
	},
	topic: {
		textAlign: 'right'
	},
	selectedContainer: {
		backgroundColor: '#169f8430'
	},
	selected: {
		color: '#16a085'
	}
})

export default TopicFilter
