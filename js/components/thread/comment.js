import React, { Component } from 'react'
import { Animated, View, StyleSheet } from 'react-native'
import HTMLView from 'react-native-htmlview'
import moment from 'moment'
import Button from '../generic/button'
import Text from '../generic/text'
import LoadReplies from './load-replies'
import { fromNow } from '../../helpers/story-helpers'
import CollapsibleComment from './collapsible-comment'
import Collapsible from 'react-native-collapsible'

class Comment extends Component {
	constructor(props) {
		super(props)

		this.state = {
			expanded: true
		}
	}

	_toggleComment() {
		this.setState({
			expanded: !this.state.expanded
		})
	}

	render() {
		const {
			text,
			by,
			id,
			time,
			deleted,
			kids,
			showComment,
			loadComments,
			fetchingReplies,
			fetchingRepliesFor,
			loadReplies,
			commentChain,
			reply,
			openSafari
		} = this.props
		return (
			<View>
				{!deleted &&
					<Button onPress={this._toggleComment.bind(this)}>
						<View style={[!reply && styles.comment, reply && styles.reply]}>
							<Text color="#999">
								{`${by} `}
								{moment(time * 1000).fromNow()}
								{` [${this.state.expanded ? '-' : '+'}]`}
							</Text>
							<CollapsibleComment
								expanded={this.state.expanded}
								text={text}
								kids={kids}
								fetchingRepliesFor={fetchingRepliesFor}
								id={id}
								commentChain={commentChain}
								loadReplies={loadReplies}
								openSafari={openSafari}
							/>
						</View>
					</Button>}
				{deleted &&
					<View style={[!reply && styles.comment, reply && styles.reply]}>
						<Text>{moment(time * 1000).fromNow()} - deleted</Text>
					</View>}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	comment: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#e2e2e2'
	},
	reply: {
		paddingTop: 10,
		paddingBottom: 10,
		marginLeft: 5,
		paddingLeft: 10,
		borderLeftWidth: 1,
		borderLeftColor: '#d5d5d5'
	},
	paddingTop: {
		paddingTop: 5
	}
})

export default Comment
