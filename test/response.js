/* global describe, it */

'use strict'

var fixtures = require('./fixtures')
var validate = require('..')
var ValidationError = require('../lib/error')

require('should-promised')

describe('Response Only', function () {
  it('should fail with empty object', function () {
    validate.response({}).should.be.rejectedWith(ValidationError, {
      errors: [
        {
          field: 'data.status',
          message: 'is required'
        }
      ]
    })
  })

  it('should fail with empty array', function () {
    validate.response([]).should.be.rejectedWith(ValidationError, {
      errors: [
        {
          field: 'data',
          message: 'is the wrong type'
        }
      ]
    })
  })

  it('should fail with undefined', function () {
    validate.response(undefined).should.be.rejectedWith(ValidationError, {})
  })

  it('should fail on bad "bodySize"', function () {
    validate.response(fixtures.response.invalid.bodySize).should.be.rejectedWith(ValidationError, {
      errors: [
        {
          field: 'data.bodySize',
          message: 'is the wrong type'
        }
      ]
    })
  })

  it('should fail on bad "headers"', function () {
    validate.response(fixtures.response.invalid.headers).should.be.rejectedWith(ValidationError, {
      errors: [
        {
          field: 'data.headers',
          message: 'is the wrong type'
        }
      ]
    })
  })

  it('should fail on malformed "headers"', function () {
    validate.response(fixtures.response.invalid.malformed).should.be.rejectedWith(ValidationError, {
      errors: [
        {
          field: 'data.headers.0.name',
          message: 'is required'
        }
      ]
    })
  })

  it('should not fail with full example', function () {
    validate.response(fixtures.response.valid).should.be.rejectedWith(ValidationError, {})
  })
})
