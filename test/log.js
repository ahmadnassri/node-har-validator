'use strict'

const HARError = require('../lib/error')
const invalid = require('./fixtures/har/invalid')
const tap = require('tap')
const valid = require('./fixtures/har/valid')
const validate = require('../lib/promise')

const errors = {
  object: new HARError([{ dataPath: '', message: "should have required property 'log'" }]),
  array: new HARError([{ dataPath: '', message: 'should be object' }]),
  undef: new HARError([{ dataPath: '', message: "should have required property 'log'" }]),
  version: new HARError([{ dataPath: '.log.version', message: 'should be string' }]),
  creator: new HARError([{ dataPath: '.log.creator.version', message: 'should be string' }]),
  date: new HARError([{ dataPath: '.log.pages[0].startedDateTime', message: 'should match pattern' }])
}

tap.test('log', assert => {
  assert.plan(7)

  return Promise.all([
    validate.har({}).catch(err => assert.match(err, errors.object, 'should fail with empty object')),
    validate.har([]).catch(err => assert.match(err, errors.array, 'should fail with empty array')),
    validate.har(undefined).catch(err => assert.match(err, errors.undef, 'should fail with undefined')),
    validate.har(invalid.version).catch(err => assert.match(err, errors.version, 'should fail on bad "log.version"')),
    validate.har(invalid.creator).catch(err => assert.match(err, errors.creator, 'should fail on bad "log.creator"')),
    validate.har(invalid.date).catch(err => assert.match(err, errors.date, 'should fail on bad "log.pages.*.startedDateTime"')),
    validate.har(valid).then(out => assert.equal(out, valid, 'should not fail with full example'))
  ])
})
