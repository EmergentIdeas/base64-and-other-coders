var _ = require('lodash')

var transform = function(input) {
	return Buffer.from(input, 'base64').toString('utf-8')
}

module.exports = transform