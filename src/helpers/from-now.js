import moment from 'moment'

const fromNow = (time) => {
  return moment(time * 1000).fromNow()
}

export default fromNow
