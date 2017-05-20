import React from 'react'
import { View, StyleSheet } from 'react-native'
import TopicFilter from './stories/topic-filter'
import List from './generic/list'
import Error from './generic/error'
import Loader from './generic/loader'
import Story from './stories/story'

const Stories = ({
	viewIndex,
	error,
	loading,
	stories,
	saveStory,
	unSaveStory,
	topics,
	navigator,
	changeTopic,
	refreshStories,
	refreshing,
	openSafari,
	height
}) => {
	return (
		<View>
			{error &&
				<Error refresh={() => refreshStories(topics.currentlySelected)} />}
			{!loading &&
				<List
					_style={{ height, paddingBottom: 60 }}
					header={() => (
						<TopicFilter topics={topics} changeTopic={changeTopic} />
					)}
					items={stories}
					refresh={() => refreshStories(topics.currentlySelected)}
					refreshing={refreshing}
					renderItem={({ item: story }) => (
						<Story
							story={story}
							saveAction={story.saved ? unSaveStory : saveStory}
							navigator={navigator}
							viewIndex={viewIndex}
							openSafari={openSafari}
							height={height}
						/>
					)}
				/>}
			{loading && <Loader />}
		</View>
	)
}

export default Stories
