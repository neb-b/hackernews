import Web from '../connected/web.connected'

const getNextView = (url) => {
  if (url) {
    return {
      title: 'Hacker News',
      component: Web
    }
  }
}

export default getNextView
