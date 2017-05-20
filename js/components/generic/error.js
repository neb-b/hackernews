import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from './text'
import Button from './button'

const Error = ({ refresh }) => (
	<Button onPress={refresh}>
		<View style={styles.error}>
			<Text size={16} color="white" paddedTop>
				There was an error. Press to refresh
			</Text>
		</View>
	</Button>
)

const styles = StyleSheet.create({
	error: {
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#fe462c',
		padding: 20
	}
})

export default Error
