/* global describe, it, it */

'use strict'

var fixtures = require('./fixtures')
var validate = require('..')
var ValidationError = require('../lib/error')

describe('Request Only', function () {
  it('should fail with empty object', function () {
    validate.request({}).should.be.rejectedWith(ValidationError, {
      errors: [
        {
          field: 'data.method',
          message: 'is required'
        }
      ]
    })
  })

  it('should fail with empty array', function () {
    validate.request([]).should.be.rejectedWith(ValidationError, {
      errors: [
        {
          field: 'data',
          message: 'is the wrong type'
        }
      ]
    })
  })

  it('should fail with undefined', function () {
    validate.request(undefined).should.be.rejectedWith(ValidationError, {})
  })

  it('should fail on bad "url"', function () {
    validate.request(fixtures.request.invalid.url).should.be.rejectedWith(ValidationError, {
      errors: [
        {
          field: 'data.url',
          message: 'must be uri format'
        }
      ]
    })
  })

  it('should fail on bad "headers"', function () {
    validate.request(fixtures.request.invalid.headers).should.be.rejectedWith(ValidationError, {
      errors: [
        {
          field: 'data.headers',
          message: 'is the wrong type'
        }
      ]
    })
  })

  it('should fail on malformed "headers"', function () {
    validate.request(fixtures.request.invalid.malformed).should.be.rejectedWith(ValidationError, {
      errors: [
        {
          field: 'data.headers.0.name',
          message: 'is required'
        }
      ]
    })
  })

  it('should not fail with full example', function () {
    validate.request(fixtures.request.valid).should.be.rejectedWith(ValidationError, {})
  })
})
