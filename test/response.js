/* global describe, it */

'use strict'

var fixtures = require('./fixtures')
var should = require('should')
var validate = require('..')

describe('Response Only', function () {
  it('should fail with empty object', function (done) {
    validate.response({}, function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data.status')
      e.errors[0].should.have.property('message').and.equal('is required')

      done()
    })

  })

  it('should fail with empty array', function (done) {
    validate.response([], function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data')
      e.errors[0].should.have.property('message').and.equal('is the wrong type')

      done()
    })
  })

  it('should fail with undefined', function (done) {
    validate.response(undefined, function (e, valid) {
      valid.should.be.false

      should.not.exist(e)

      done()
    })
  })

  it('should fail on bad "bodySize"', function (done) {
    validate.response(fixtures.response.invalid.bodySize, function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data.bodySize')
      e.errors[0].should.have.property('message').and.equal('is the wrong type')

      done()
    })
  })

  it('should fail on bad "headers"', function (done) {
    validate.response(fixtures.response.invalid.headers, function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data.headers')
      e.errors[0].should.have.property('message').and.equal('is the wrong type')

      done()
    })
  })

  it('should fail on malformed "headers"', function (done) {
    validate.response(fixtures.response.invalid.malformed, function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data.headers.*.name')
      e.errors[0].should.have.property('message').and.equal('is required')

      done()
    })
  })

  it('should not fail with full example', function (done) {
    validate.response(fixtures.response.valid, function (e, valid) {
      valid.should.be.true

      should.not.exist(e)

      done()
    })
  })
})
