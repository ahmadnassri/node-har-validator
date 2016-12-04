import * as schemas from 'har-schema'
import * as validate from '../src/async'
import HARError from '../src/error'
import invalid from './fixtures/har/invalid'
import valid from './fixtures/har/valid'
import { test } from 'tap'

test('async', (tap) => {
  let keys = Object.keys(schemas).filter((key) => key !== 'default')

  tap.plan(keys.length + 2)

  keys.forEach(key => {
    tap.type(validate[key], 'function', `${key} is a function`)
  })

  tap.test('failure', (assert) => {
    assert.plan(4)

    let error = new HARError([{ dataPath: '.log.version', message: 'should be string' }])

    assert.notOk(validate.har({}), 'should fail')

    validate.har({}, (err, valid) => {
      assert.notOk(valid, 'should return false in a callback')
      assert.type(err, HARError, 'should return HARError object in a callback')
    })

    validate.har(invalid.version, (err) => {
      assert.match(err, error, 'should fail on bad "log.version"')
    })
  })

  tap.test('success', (assert) => {
    assert.plan(3)

    assert.ok(validate.har(valid), 'should be successful')

    validate.har(valid, (err, valid) => {
      assert.ok(valid, 'should return true in a callback')
      assert.equal(err, null, 'should not have any errors')
    })
  })
})
