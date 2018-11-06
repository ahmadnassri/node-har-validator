'use strict'

const HARError = require('../lib/error')
const invalid = require('./fixtures/har/invalid')
const schemas = require('har-schema')
const tap = require('tap')
const valid = require('./fixtures/har/valid')
const validate = require('../lib/async')

tap.test('async', assert => {
  const keys = Object.keys(schemas).filter(key => key !== 'default')

  assert.plan(keys.length)

  keys.forEach(key => {
    assert.type(validate[key], 'function', `${key} is a function`)
  })
})

tap.test('failure', assert => {
  assert.plan(4)

  const error = new HARError([{ dataPath: '.log.version', message: 'should be string' }])

  assert.notOk(validate.har({}), 'should fail')

  validate.har({}, (err, valid) => {
    assert.notOk(valid, 'should return false in a callback')
    assert.type(err, HARError, 'should return HARError object in a callback')
  })

  validate.har(invalid.version, (err) => {
    assert.match(err, error, 'should fail on bad "log.version"')
  })
})

tap.test('success', assert => {
  assert.plan(3)

  assert.ok(validate.har(valid), 'should be successful')

  validate.har(valid, (err, valid) => {
    assert.ok(valid, 'should return true in a callback')
    assert.equal(err, null, 'should not have any errors')
  })
})
