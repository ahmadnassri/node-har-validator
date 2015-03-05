'use strict';

var should = require('should');

var fixture = require('./fixtures/har');
var validate = require('..');

describe('Full HAR', function () {
  it('should fail with empty object', function (done) {
    validate({}, function (err, valid) {
      valid.should.be.false;

      err[0].should.have.property('field').and.equal('data.log');
      err[0].should.have.property('message').and.equal('is required');

      done();
    });

  });

  it('should fail with empty array', function (done) {
    validate([], function (err, valid) {
      valid.should.be.false;

      err[0].should.have.property('field').and.equal('data');
      err[0].should.have.property('message').and.equal('is the wrong type');

      done();
    });
  });

  it('should fail with undefined', function (done) {
    validate(undefined, function (err, valid) {
      valid.should.be.false;

      done();
    });
  });

  it('should fail on bad "log.version"', function (done) {
    validate(fixture.invalid.version, function (err, valid) {
      valid.should.be.false;

      err[0].should.have.property('field').and.equal('data.log.version');
      err[0].should.have.property('message').and.equal('is the wrong type');

      done();
    });
  });

  it('should fail on bad "log.creator"', function (done) {
    validate(fixture.invalid.creator, function (err, valid) {
      valid.should.be.false;

      err[0].should.have.property('field').and.equal('data.log.creator');
      err[0].should.have.property('message').and.equal('referenced schema does not match');

      done();
    });
  });

  it('should not fail with full example', function (done) {
    validate(fixture.valid, function (err, valid) {
      valid.should.be.true;

      should.not.exist(err);

      done();
    });
  });
});
