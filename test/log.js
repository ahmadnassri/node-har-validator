/* global describe, it */

'use strict'

var fixtures = require('./fixtures')
var should = require('should')
var validate = require('..')

describe('Full HAR', function () {
  it('should fail with empty object', function (done) {
    validate({}, function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data.log')
      e.errors[0].should.have.property('message').and.equal('is required')

      done()
    })
  })

  it('should fail with empty array', function (done) {
    validate.har([], function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data')
      e.errors[0].should.have.property('message').and.equal('is the wrong type')

      done()
    })
  })

  it('should fail with undefined', function (done) {
    validate.har(undefined, function (e, valid) {
      valid.should.be.false

      should.not.exist(e)

      done()
    })
  })

  it('should fail on bad "log.version"', function (done) {
    validate.har(fixtures.har.invalid.version, function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data.log.version')
      e.errors[0].should.have.property('message').and.equal('is the wrong type')

      done()
    })
  })

  it('should fail on bad "log.creator"', function (done) {
    validate.har(fixtures.har.invalid.creator, function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data.log.creator.version')
      e.errors[0].should.have.property('message').and.equal('is required')

      done()
    })
  })

  it('should fail on bad "log.pages.*.startedDateTime"', function (done) {
    validate.har(fixtures.har.invalid.date, function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data.log.pages.0.startedDateTime')
      e.errors[0].should.have.property('message').and.equal('must be date-time format')

      done()
    })
  })

  it('should not fail with full example', function (done) {
    validate.har(fixtures.har.valid, function (e, valid) {
      valid.should.be.true

      should.not.exist(e)

      done()
    })
  })
})
