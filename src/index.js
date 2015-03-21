'use strict'

var validator = require('is-my-json-valid')
var schemas = require('./schemas.json')

var runner = function (schema, data, cb) {
  var validate = validator(schema, {
    schemas: schemas
  })

  var valid = false

  if (data !== undefined) {
    // execute is-my-json-valid
    valid = validate(data)
  }

  // callback?
  if (cb) {
    return cb(validate.errors, valid)
  }

  return valid
}

module.exports = function (data, cb) {
  return runner(schemas.log, data, cb)
}

Object.keys(schemas).map(function (name) {
  module.exports[name] = function (data, cb) {
    return runner(schemas[name], data, cb)
  }
})
