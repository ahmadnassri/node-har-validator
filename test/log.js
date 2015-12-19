/* global describe, it */

'use strict'

var fixtures = require('./fixtures')
var validate = require('..')
var ValidationError = require('../lib/error')

describe('Full HAR', function () {
  it('should fail with empty object', function () {
    validate({}).should.be.rejectedWith(ValidationError, {
      errors: [
        {
          field: 'data.log',
          message: 'is required'
        }
      ]
    })
  })

  it('should fail with empty array', function () {
    validate.har([]).should.be.rejectedWith(ValidationError, {
      errors: [
        {
          field: 'data',
          message: 'is the wrong type'
        }
      ]
    })
  })

  it('should fail with undefined', function () {
    validate.har(undefined).should.be.rejectedWith(ValidationError, {})
  })

  it('should fail on bad "log.version"', function () {
    validate.har(fixtures.har.invalid.version).should.be.rejectedWith(ValidationError, {
      errors: [
        {
          field: 'data.log.version',
          message: 'is the wrong type'
        }
      ]
    })
  })

  it('should fail on bad "log.creator"', function () {
    validate.har(fixtures.har.invalid.creator).should.be.rejectedWith(ValidationError, {
      errors: [
        {
          field: 'data.log.creator.version',
          message: 'is required'
        }
      ]
    })
  })

  it('should fail on bad "log.pages.*.startedDateTime"', function () {
    validate.har(fixtures.har.invalid.date).should.be.rejectedWith(ValidationError, {
      errors: [
        {
          field: 'data.log.pages.0.startedDateTime',
          message: 'must be date-time format'
        }
      ]
    })
  })

  it('should not fail with full example', function () {
    validate.har(fixtures.har.valid).should.be.rejectedWith(ValidationError, {})
  })
})
