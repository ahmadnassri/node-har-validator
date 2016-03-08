import HARError from '../src/error'
import tap from 'tap'
import validate from '../src/index'
import { har as fixture } from './fixtures/'

tap.test('promises', (assert) => {
  assert.ok(validate() instanceof Promise, 'default import is a promise')

  Promise.all([
    validate({}).catch((err) => assert.type(err, HARError, 'thrown error is an object')),
    validate(fixture.valid).then((out) => assert.equal(out, fixture.valid, 'resolves with the original data'))
  ]).then(assert.end)
})
