'use strict';

var should = require('should');

var fixture = require('./fixtures/request');
var validate = require('..');

describe('Request Only', function () {
  it('should fail with empty object', function (done) {
    validate.request({}, function (err, valid) {
      valid.should.be.false;

      err[0].should.have.property('field').and.equal('data.method');
      err[0].should.have.property('message').and.equal('is required');

      done();
    });

  });

  it('should fail with empty array', function (done) {
    validate.request([], function (err, valid) {
      valid.should.be.false;

      err[0].should.have.property('field').and.equal('data');
      err[0].should.have.property('message').and.equal('is the wrong type');

      done();
    });
  });

  it('should fail with undefined', function (done) {
    validate.request(undefined, function (err, valid) {
      valid.should.be.false;

      done();
    });
  });

  it('should fail on bad "url"', function (done) {
    validate.request(fixture.invalid.url, function (err, valid) {
      valid.should.be.false;

      err[0].should.have.property('field').and.equal('data.url');
      err[0].should.have.property('message').and.equal('must be uri format');

      done();
    });
  });

  it('should fail on bad "headers"', function (done) {
    validate.request(fixture.invalid.headers, function (err, valid) {
      valid.should.be.false;

      err[0].should.have.property('field').and.equal('data.headers');
      err[0].should.have.property('message').and.equal('is the wrong type');

      done();
    });
  });

  it('should fail on malformed "headers"', function (done) {
    validate.request(fixture.invalid.malformed, function (err, valid) {
      valid.should.be.false;

      err[0].should.have.property('field').and.equal('data.headers.*');
      err[0].should.have.property('message').and.equal('referenced schema does not match');

      done();
    });
  });

  it('should not fail with full example', function (done) {
    validate.request(fixture.valid, function (err, valid) {
      valid.should.be.true;

      should.not.exist(err);

      done();
    });
  });
});
