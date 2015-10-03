/* global describe, it */

'use strict'

var fixtures = require('./fixtures')
var validate = require('../lib/async')

var should = require('should')

describe('Validator', function () {
  it('should throw error for invalid HAR', function (done) {
    validate({}).should.be.false

    validate({}, function (err, valid) {
      valid.should.be.false
      err.should.be.Error

      done()
    })
  })

  it('should throw error for invalid log.version', function (done) {
    validate.har(fixtures.har.invalid.version, function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data.log.version')
      e.errors[0].should.have.property('message').and.equal('is the wrong type')

      done()
    })
  })

  it('should not throw error', function (done) {
    validate(fixtures.har.valid).should.be.true

    validate(fixtures.har.valid, function (err, valid) {
      valid.should.be.true
      should.not.exist(err)

      done()
    })
  })
})
