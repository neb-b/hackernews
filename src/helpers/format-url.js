const formatUrl = (url) => {

  const trimUrl = (str, start) => {
    return str.split('')
      .slice(start, str.length)
      .join('')
      .split('/')[0]
  }
  
  return url.match('http://')
  ? trimUrl(url, 7)
  : trimUrl(url, 8)
}

export default formatUrl
