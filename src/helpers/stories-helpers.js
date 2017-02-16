import moment from 'moment'

export const  formatUrl = (url) => {
  const trimUrl = (str, start) => {
    return str.split('')
      .slice(start, str.length)
      .join('')
      .split('/')[0]
  }

  if (url) {
    return url.match('http://')
    ? trimUrl(url, 7)
    : trimUrl(url, 8)
  }

  return null
}

export const fromNow = (time) => {
  return moment(time * 1000).fromNow()
}
