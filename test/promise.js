'use strict'

const fixture = require('./fixtures/har/valid')
const HARError = require('../lib/error')
const schemas = require('har-schema')
const tap = require('tap')
const validate = require('../lib/promise')

tap.test('promises', assert => {
  const keys = Object.keys(schemas).filter((key) => key !== 'default')

  assert.plan((keys.length * 2) + 2)

  keys.forEach(key => {
    assert.type(validate[key], 'function', `${key} is a function`)
    assert.type(validate[key]().catch(() => {}), Promise, `${key}() is a promise`)
  })

  validate.har({}).catch(err => {
    assert.type(err, HARError, 'thrown error is an object')
  })

  validate.har(fixture).then(out => {
    assert.equal(out, fixture, 'resolves with the original data')
  })
})
