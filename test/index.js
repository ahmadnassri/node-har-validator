/* global describe, it */

'use strict'

var fixtures = require('./fixtures')
var validate = require('..')

var should = require('should')

describe('Validator', function () {
  it('should throw error', function (done) {
    validate({}).should.be.false

    validate({}, function (err, valid) {
      valid.should.be.false
      err.should.be.Error

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
