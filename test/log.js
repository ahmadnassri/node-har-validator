import HARError from '../src/error'
import tap from 'tap'
import validate from '../src/promise'
import { har as fixture } from './fixtures/'

// const errors = {
//   object: new HARError([{ field: 'data.log', message: 'is required' }]),
//   array: new HARError([{ field: 'data', message: 'is the wrong type' }]),
//   undef: new HARError([{ field: 'data.log', message: 'is required' }]),
//   version: new HARError([{ field: 'data.log.version', message: 'is the wrong type' }]),
//   creator: new HARError([{ field: 'data.log.creator.version', message: 'is the wrong type' }]),
//   date: new HARError([{ field: 'data.log.pages.0.startedDateTime', message: 'must be date-time format' }])
// }

tap.test('log', (assert) => {
  assert.plan(7)

  Promise.all([
    validate({}).catch((err) => assertError(err, 'should fail with empty object')),
    validate([]).catch((err) => assertError(err, 'should fail with empty array')),
    validate(undefined).catch((err) => assertError(err, 'should fail with undefined')),
    validate(fixture.invalid.version).catch((err) => assertError(err, 'should fail on bad "log.version"')),
    validate(fixture.invalid.creator).catch((err) => assertError(err, 'should fail on bad "log.creator"')),
    validate(fixture.invalid.date).catch((err) => assertError(err, 'should fail on bad "log.pages.*.startedDateTime"')),
    validate(fixture.valid).then((out) => assert.equal(out, fixture.valid, 'should not fail with full example'))
  ])

  function assertError (err, msg) {
    assert.ok(err instanceof HARError && err.errors.length > 0, msg)
  }
})
