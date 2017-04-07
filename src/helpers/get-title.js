export default function getTitle (viewingStories, topicSelected) {
  const titles = {
    topstories: 'Top Stories',
    beststories: 'Best Stories',
    jobstories: 'Job Stories'
  }

  return viewingStories ? titles[topicSelected] : 'Read it later'
}
