/* global describe, it */

'use strict'

var should = require('should')
var fixtures = require('./fixtures')

var validate = require('..')

describe('Response Only', function () {
  it('should fail with empty object', function (done) {
    validate.response({}, function (err, valid) {
      valid.should.be.false

      err[0].should.have.property('field').and.equal('data.status')
      err[0].should.have.property('message').and.equal('is required')

      done()
    })

  })

  it('should fail with empty array', function (done) {
    validate.response([], function (err, valid) {
      valid.should.be.false

      err[0].should.have.property('field').and.equal('data')
      err[0].should.have.property('message').and.equal('is the wrong type')

      done()
    })
  })

  it('should fail with undefined', function (done) {
    validate.response(undefined, function (err, valid) {
      valid.should.be.false

      should.not.exist(err)

      done()
    })
  })

  it('should fail on bad "bodySize"', function (done) {
    validate.response(fixtures.response.invalid.bodySize, function (err, valid) {
      valid.should.be.false

      err[0].should.have.property('field').and.equal('data.bodySize')
      err[0].should.have.property('message').and.equal('is the wrong type')

      done()
    })
  })

  it('should fail on bad "headers"', function (done) {
    validate.response(fixtures.response.invalid.headers, function (err, valid) {
      valid.should.be.false

      err[0].should.have.property('field').and.equal('data.headers')
      err[0].should.have.property('message').and.equal('is the wrong type')

      done()
    })
  })

  it('should fail on malformed "headers"', function (done) {
    validate.response(fixtures.response.invalid.malformed, function (err, valid) {
      valid.should.be.false

      err[0].should.have.property('field').and.equal('data.headers.*')
      err[0].should.have.property('message').and.equal('referenced schema does not match')

      done()
    })
  })

  it('should not fail with full example', function (done) {
    validate.response(fixtures.response.valid, function (err, valid) {
      valid.should.be.true

      should.not.exist(err)

      done()
    })
  })
})
