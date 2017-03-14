'use strict'

const tap = require('tap')
const validate = require('../lib/promise')

tap.test('cache entry', assert => {
  assert.plan(2)

  return Promise.all([
    validate.cache({ beforeRequest: null }).then(out => assert.match(out, { beforeRequest: null }, 'should allow null beforeRequest')),
    validate.cache({ afterRequest: null }).then(out => assert.match(out, { afterRequest: null }, 'should allow null afterRequest'))
  ])
})
