import React from 'react'
import { View, StyleSheet } from 'react-native'
import HTMLView from 'react-native-htmlview'
import LoadReplies from './load-replies'
import { fromNow } from '../../helpers/story-helpers'
import Collapsible from 'react-native-collapsible'
import Comment from './comment'

const CollapsibleComment = ({
	expanded,
	text,
	kids,
	fetchingRepliesFor,
	id,
	commentChain,
	loadReplies,
	openSafari
}) => {
	const replies = kids && kids.length
	return (
		<View style={expanded && styles.container}>
			<Collapsible collapsed={!expanded}>
				<View style={styles.commentBody}>
					<HTMLView
						value={`<custom>${text}</custom>`}
						onLinkPress={url => openSafari(url)}
						stylesheet={styles}
					/>
					{replies &&
						typeof kids[0] === 'number' &&
						<LoadReplies
							isLoading={fetchingRepliesFor === id}
							loadReplies={loadReplies}
							kids={kids}
							commentChain={commentChain}
							id={id}
						/>}
					{replies &&
						typeof kids[0] === 'object' &&
						<View style={styles.repliesContainer}>
							{kids.map(comment => (
								<Comment
									key={comment.id}
									reply
									{...comment}
									loadReplies={loadReplies}
									fetchingRepliesFor={fetchingRepliesFor}
								/>
							))}
						</View>}
				</View>
			</Collapsible>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		// paddingBottom: 10
	},
	repliesContainer: {
		marginTop: 10
	},
	custom: {
		// lineHeight: 1
	},
	p: {
		lineHeight: 18,
		fontSize: 14
	}
})

export default CollapsibleComment
