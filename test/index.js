/* global describe, it */

'use strict'

var fixtures = require('./fixtures')
var validate = require('..')

var should = require('should')

describe('Validator', function () {
  it('should throw error', function (done) {
    validate.log({}).should.be.false

    validate.log({}, function (err, valid) {
      valid.should.be.false
      err.should.be.Error

      done()
    })
  })

  it('should not throw error', function (done) {
    validate.log(fixtures.log.valid).should.be.true

    validate.log(fixtures.log.valid, function (err, valid) {
      valid.should.be.true
      should.not.exist(err)

      done()
    })
  })
})
