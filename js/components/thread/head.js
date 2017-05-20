import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from '../generic/text'
import Button from '../generic/button'
import { formatUrl, fromNow } from '../../helpers/story-helpers'

const Thread = ({
	loading,
	title,
	score,
	time,
	url,
	descendants,
	saved,
	saveAction,
	story,
	openSafari
}) => {
	return (
		<Button _style={styles.container} onPress={() => openSafari(url)}>
			<Text bold size={32}>{title}</Text>
			<View style={styles.row}>
				<Text style={[styles.url]}>{url && formatUrl(url)}</Text>
				<View style={[styles.time]}>
					<Text>{fromNow(time)}</Text>
				</View>
			</View>

			<View style={[styles.row, styles.space]}>
				<View>
					<Text style={[styles.comments]}>
						{descendants || 0} comment{descendants === 1 ? '' : 's'}
					</Text>
					<Text size={16} style={[styles.score]}>{score} points</Text>
				</View>
				<View>
					<Button
						padded
						underlayColor="#5e5e5e"
						_style={[styles.save, saved && styles.blue]}
						onPress={() => saveAction(story)}
					>
						<Text
							alignRight
							bold
							color={'white'}
							size={12}
						>{`${saved ? 'Saved for' : 'Read it'} later`}</Text>
					</Button>
				</View>
			</View>
		</Button>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#e0e0e0'
	},
	row: {
		flexDirection: 'row',
		paddingTop: 10
	},
	space: {
		justifyContent: 'space-between'
	},
	save: {
		backgroundColor: '#8e44ad',
		borderRadius: 10
	},
	blue: {
		backgroundColor: '#2980b9'
	},
	time: {
		paddingLeft: 10
	}
})

export default Thread
