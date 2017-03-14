'use strict'

const schemas = require('har-schema')
const Ajv = require('ajv')
const HARError = require('./error')

let ajv

function validate (name, data) {
  data = data || {}

  // validator config
  ajv = ajv || new Ajv({
    allErrors: true,
    schemas: schemas
  })

  let validate = ajv.getSchema(name + '.json')

  return new Promise((resolve, reject) => {
    let valid = validate(data)

    !valid ? reject(new HARError(validate.errors)) : resolve(data)
  })
}

exports.afterRequest = (data) => validate('afterRequest', data)
exports.beforeRequest = (data) => validate('beforeRequest', data)
exports.browser = (data) => validate('browser', data)
exports.cache = (data) => validate('cache', data)
exports.content = (data) => validate('content', data)
exports.cookie = (data) => validate('cookie', data)
exports.creator = (data) => validate('creator', data)
exports.entry = (data) => validate('entry', data)
exports.har = (data) => validate('har', data)
exports.header = (data) => validate('header', data)
exports.log = (data) => validate('log', data)
exports.page = (data) => validate('page', data)
exports.pageTimings = (data) => validate('pageTimings', data)
exports.postData = (data) => validate('postData', data)
exports.query = (data) => validate('query', data)
exports.request = (data) => validate('request', data)
exports.response = (data) => validate('response', data)
exports.timings = (data) => validate('timings', data)
