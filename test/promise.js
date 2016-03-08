import HARError from '../src/error'
import tap from 'tap'
import validate from '../src/promise'
import { har as fixture } from './fixtures/'

tap.test('promises', (assert) => {
  assert.plan(3)

  assert.type(validate(), Promise, 'default import is a promise')

  Promise.all([
    validate({}).catch((err) => assert.type(err, HARError, 'thrown error is an object')),
    validate(fixture.valid).then((out) => assert.equal(out, fixture.valid, 'resolves with the original data'))
  ])
})
