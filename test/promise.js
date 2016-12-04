import * as schemas from 'har-schema'
import * as validate from '../src/promise'
import HARError from '../src/error'
import { har as fixture } from './fixtures/'
import { test } from 'tap'

test('promises', (assert) => {
  let keys = Object.keys(schemas).filter((key) => key !== 'default')

  assert.plan((keys.length * 2) + 2)

  keys.forEach(key => {
    assert.type(validate[key], 'function', `${key} is a function`)
    assert.type(validate[key]().catch(() => {}), Promise, `${key}() is a promise`)
  })

  validate.har({}).catch((err) => {
    assert.type(err, HARError, 'thrown error is an object')
  })

  validate.har(fixture.valid).then((out) => {
    assert.equal(out, fixture.valid, 'resolves with the original data')
  })
})
