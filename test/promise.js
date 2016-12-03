import HARError from '../src/error'
import { har as validate } from '../src/promise'
import { har as fixture } from './fixtures/'
import { test } from 'tap'

test('promises', (assert) => {
  assert.plan(3)

  assert.type(validate(fixture.valid), Promise, 'default import is a promise')

  return Promise.all([
    validate({}).catch((err) => assert.type(err, HARError, 'thrown error is an object')),
    validate(fixture.valid).then((out) => assert.equal(out, fixture.valid, 'resolves with the original data'))
  ])
})
