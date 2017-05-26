import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Text from '../generic/text'

const NoSavedStories = () => (
	<View style={styles.container}>
		<Icon name="clock" color="#2980b9" size={30} />
		<Text paddedTop size={20}>No saved stories...</Text>
	</View>
)

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 300
	}
})

export default NoSavedStories
