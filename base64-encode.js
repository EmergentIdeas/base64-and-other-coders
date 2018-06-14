var _ = require('lodash')

var transform = function(input) {
	return Buffer.from(input).toString('base64')
}

module.exports = transform