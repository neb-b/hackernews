import Web from '../components/web'

const getNextView = (url) => {
  if (url) {
    return {
      title: 'Hacker News',
      component: Web,
      props: {
        url
      }
    }
  }
}

export default getNextView
