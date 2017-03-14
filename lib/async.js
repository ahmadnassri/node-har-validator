'use strict'

const schemas = require('har-schema')
const Ajv = require('ajv')
const HARError = require('./error')

let ajv

function validate (name, data, next) {
  data = data || {}

  // validator config
  ajv = ajv || new Ajv({
    allErrors: true,
    schemas: schemas
  })

  let validate = ajv.getSchema(name + '.json')

  let valid = validate(data)

  // callback?
  if (typeof next === 'function') {
    return next(!valid ? new HARError(validate.errors) : null, valid)
  }

  return valid
}

exports.afterRequest = (data, next) => validate('afterRequest', data, next)
exports.beforeRequest = (data, next) => validate('beforeRequest', data, next)
exports.browser = (data, next) => validate('browser', data, next)
exports.cache = (data, next) => validate('cache', data, next)
exports.content = (data, next) => validate('content', data, next)
exports.cookie = (data, next) => validate('cookie', data, next)
exports.creator = (data, next) => validate('creator', data, next)
exports.entry = (data, next) => validate('entry', data, next)
exports.har = (data, next) => validate('har', data, next)
exports.header = (data, next) => validate('header', data, next)
exports.log = (data, next) => validate('log', data, next)
exports.page = (data, next) => validate('page', data, next)
exports.pageTimings = (data, next) => validate('pageTimings', data, next)
exports.postData = (data, next) => validate('postData', data, next)
exports.query = (data, next) => validate('query', data, next)
exports.request = (data, next) => validate('request', data, next)
exports.response = (data, next) => validate('response', data, next)
exports.timings = (data, next) => validate('timings', data, next)
