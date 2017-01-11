const {send} = require('micro')

module.exports = async function (req, res) {
  send(res, 200, 'Ready!')
}
