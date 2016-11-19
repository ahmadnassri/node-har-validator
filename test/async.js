import HARError from '../src/error'
import validate from '../src/async'
import { har as fixture } from './fixtures/'
import { test } from 'tap'

test('async', (tap) => {
  tap.plan(2)

  tap.test('failure', (assert) => {
    assert.plan(4)

    let error = new HARError([{ field: 'data.log.version', message: 'is the wrong type' }])

    assert.notOk(validate({}), 'should fail')

    validate({}, (err, valid) => {
      assert.notOk(valid, 'should return false in a callback')
      assert.type(err, HARError, 'should return HARError object in a callback')
    })

    validate(fixture.invalid.version, (err) => assert.match(err, error, 'should fail on bad "log.version"'))
  })

  tap.test('success', (assert) => {
    assert.plan(3)

    assert.ok(validate(fixture.valid), 'should be successful')

    validate(fixture.valid, (err, valid) => {
      assert.ok(valid, 'should return true in a callback')
      assert.equal(err, null, 'should not have any errors')
    })
  })
})
