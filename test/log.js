/* global describe, it */

'use strict'

var should = require('should')
var fixtures = require('./fixtures')

var validate = require('..')

describe('Full HAR', function () {
  it('should fail with empty object', function (done) {
    validate.log({}, function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data.log')
      e.errors[0].should.have.property('message').and.equal('is required')

      done()
    })

  })

  it('should fail with empty array', function (done) {
    validate.log([], function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data')
      e.errors[0].should.have.property('message').and.equal('is the wrong type')

      done()
    })
  })

  it('should fail with undefined', function (done) {
    validate.log(undefined, function (e, valid) {
      valid.should.be.false

      should.not.exist(e)

      done()
    })
  })

  it('should fail on bad "log.version"', function (done) {
    validate.log(fixtures.log.invalid.version, function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data.log.version')
      e.errors[0].should.have.property('message').and.equal('is the wrong type')

      done()
    })
  })

  it('should fail on bad "log.creator"', function (done) {
    validate.log(fixtures.log.invalid.creator, function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data.log.creator')
      e.errors[0].should.have.property('message').and.equal('referenced schema does not match')

      done()
    })
  })

  it('should not fail with full example', function (done) {
    validate.log(fixtures.log.valid, function (e, valid) {
      valid.should.be.true

      should.not.exist(e)

      done()
    })
  })
})
