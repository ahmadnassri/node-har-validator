'use strict'

const HARError = require('../lib/error')
const invalid = require('./fixtures/response/invalid')
const valid = require('./fixtures/response/valid')
const validate = require('../lib/promise')
const tap = require('tap')

const errors = {
  object: new HARError([{ dataPath: '', message: "should have required property 'status'" }]),
  array: new HARError([{ dataPath: '', message: 'should be object' }]),
  undef: new HARError([{ dataPath: '', message: "should have required property 'status'" }]),
  bodySize: new HARError([{ dataPath: '.bodySize', message: 'should be integer' }]),
  headers: new HARError([{ dataPath: '.headers', message: 'should be array' }]),
  malformed: new HARError([{ dataPath: '.headers[0]', message: "should have required property 'name'" }])
}

tap.test('response', assert => {
  assert.plan(7)

  return Promise.all([
    validate.response({}).catch(err => assert.match(err, errors.object, 'should fail with empty object')),
    validate.response([]).catch(err => assert.match(err, errors.array, 'should fail with empty array')),
    validate.response(undefined).catch(err => assert.match(err, errors.undef, 'should fail with undefined')),
    validate.response(invalid.bodySize).catch(err => assert.match(err, errors.bodySize, 'should fail on bad "bodySize"')),
    validate.response(invalid.headers).catch(err => assert.match(err, errors.headers, 'should fail on bad "headers"')),
    validate.response(invalid.malformed).catch(err => assert.match(err, errors.malformed, 'should fail on malformed "headers"')),
    validate.response(valid).then(out => assert.equal(out, valid, 'should not fail with full example'))
  ])
})
