#! /usr/local/bin/node
var transform = require('./base64-encode')
var transformer = require('console-in-transformer')

transformer(transform, '')