import { ROOT_URL } from '../constants'

export const getJson = (endpoint) => {
  const url = `${ROOT_URL}/stories/${endpoint}`

  return fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then((res) => res.json())
}
