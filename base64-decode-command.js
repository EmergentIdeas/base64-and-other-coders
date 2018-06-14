#! /usr/local/bin/node
var quote = require('./base64-decode')
var transformer = require('console-in-transformer')

transformer(quote, '')