import HARError from '../src/error'
import tap from 'tap'
import validate from '../src/async'
import { har as fixture } from './fixtures/'

tap.test('async', (t) => {
  t.test('failure', (assert) => {
    let error = new HARError([{ field: 'data.log.version', message: 'is the wrong type' }])

    assert.notOk(validate({}), 'should fail')

    validate({}, (err, valid) => {
      assert.notOk(valid, 'should return false in a callback')
      assert.type(err, HARError, 'should return HARError object in a callback')
    })

    validate(fixture.invalid.version, (err) => assert.match(err, error, 'should fail on bad "log.version"'))

    assert.end()
  })

  t.test('success', (assert) => {
    assert.ok(validate(fixture.valid), 'should be successful')

    validate(fixture.valid, (err, valid) => {
      assert.ok(valid, 'should return true in a callback')
      assert.equal(err, null, 'should not have any errors')
    })

    assert.end()
  })

  t.end()
})
