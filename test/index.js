/* global describe, it */

'use strict'

var fixtures = require('./fixtures')
var validate = require('..')
var ValidationError = require('../lib/error')

require('should-promised')

describe('Promises', function () {
  it('should return a Promise', function () {
    validate().should.be.a.Promise()
  })

  it('should throw error', function () {
    validate({}).should.be.rejectedWith(ValidationError)
  })

  it('should be valid', function () {
    validate(fixtures.har.valid).should.be.fulfilledWith(fixtures.har.valid)
  })
})
