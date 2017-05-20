import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from '../generic/text'

const NoSavedStories = () => (
	<View style={styles.container}>
		<Text size={20}>No saved stories...</Text>
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
