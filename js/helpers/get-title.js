export const titles = {
	topstories: 'Top Stories',
	beststories: 'Best Stories',
	jobstories: 'Jobs',
	askstories: 'AskHN',
	showstories: 'ShowHN'
}

export default function getTitle(topicSelected) {
	return titles[topicSelected]
}
