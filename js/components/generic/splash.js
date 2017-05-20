import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import Text from './text'

const Splash = () => (
	<View style={styles.splash}>
		<ActivityIndicator color="white" />
		<View style={styles.message}>
			<Text color="white" size={20} bold>Loading stories...</Text>
		</View>
	</View>
)

const styles = StyleSheet.create({
	splash: {
		flex: 1,
		paddingTop: 250,
		alignItems: 'center',
		backgroundColor: '#009688'
	},
	message: {
		paddingTop: 30
	}
})

export default Splash
