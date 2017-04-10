import { ROOT_URL } from '../constants'

export const getJson = (endpoint, topic = '', query = '') => {
  let url = `${ROOT_URL}/${endpoint}`
  url += topic ? `/${topic}` : ''
  url += query ? `?${query}` : ''

  return fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then((res) => res.json())
}
