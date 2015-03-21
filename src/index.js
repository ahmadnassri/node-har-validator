'use strict'

var validator = require('is-my-json-valid')
var schemas = require('./schemas.json')

function ValidationError (errors) {
  this.name = 'ValidationError'
  this.errors = errors
}

ValidationError.prototype = Error.prototype

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
  if (!cb) {
    if (validate.errors) {
      throw new ValidationError(validate.errors)
    }
  } else {
    return cb(validate.errors ? new ValidationError(validate.errors) : null, valid)
  }

  return valid
}

Object.keys(schemas).map(function (name) {
  module.exports[name] = function (data, cb) {
    return runner(schemas[name], data, cb)
  }
})
