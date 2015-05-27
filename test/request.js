/* global describe, it */

'use strict'

var fixtures = require('./fixtures')
var should = require('should')
var validate = require('..')

describe('Request Only', function () {
  it('should fail with empty object', function (done) {
    validate.request({}, function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data.method')
      e.errors[0].should.have.property('message').and.equal('is required')

      done()
    })

  })

  it('should fail with empty array', function (done) {
    validate.request([], function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data')
      e.errors[0].should.have.property('message').and.equal('is the wrong type')

      done()
    })
  })

  it('should fail with undefined', function (done) {
    validate.request(undefined, function (e, valid) {
      valid.should.be.false

      should.not.exist(e)

      done()
    })
  })

  it('should fail on bad "url"', function (done) {
    validate.request(fixtures.request.invalid.url, function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data.url')
      e.errors[0].should.have.property('message').and.equal('must be uri format')

      done()
    })
  })

  it('should fail on bad "headers"', function (done) {
    validate.request(fixtures.request.invalid.headers, function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data.headers')
      e.errors[0].should.have.property('message').and.equal('is the wrong type')

      done()
    })
  })

  it('should fail on malformed "headers"', function (done) {
    validate.request(fixtures.request.invalid.malformed, function (e, valid) {
      valid.should.be.false

      e.errors[0].should.have.property('field').and.equal('data.headers.0.name')
      e.errors[0].should.have.property('message').and.equal('is required')

      done()
    })
  })

  it('should not fail with full example', function (done) {
    validate.request(fixtures.request.valid, function (e, valid) {
      valid.should.be.true

      should.not.exist(e)

      done()
    })
  })
})
