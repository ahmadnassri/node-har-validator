import HARError from '../src/error'
import tap from 'tap'
import { response as fixture } from './fixtures/'
import { response } from '../src/promise'

// const errors = {
//   object: new HARError([{ field: 'data.status', message: 'is required' }]),
//   array: new HARError([{ field: 'data', message: 'is the wrong type' }]),
//   undef: new HARError([{ field: 'data.status', message: 'is required' }]),
//   bodySize: new HARError([{ field: 'data.bodySize', message: 'is the wrong type' }]),
//   headers: new HARError([{ field: 'data.headers', message: 'is the wrong type' }]),
//   malformed: new HARError([{ field: 'data.headers.0.name', message: 'is required' }])
// }

tap.test('response', (assert) => {
  assert.plan(7)

  Promise.all([
    response({}).catch((err) => assertError(err, 'should fail with empty object')),
    response([]).catch((err) => assertError(err, 'should fail with empty array')),
    response(undefined).catch((err) => assertError(err, 'should fail with undefined')),
    response(fixture.invalid.bodySize).catch((err) => assertError(err, 'should fail on bad "bodySize"')),
    response(fixture.invalid.headers).catch((err) => assertError(err, 'should fail on bad "headers"')),
    response(fixture.invalid.malformed).catch((err) => assertError(err, 'should fail on malformed "headers"')),
    response(fixture.valid).then((out) => assert.equal(out, fixture.valid, 'should not fail with full example'))
  ])

  function assertError (err, msg) {
    assert.ok(err instanceof HARError && err.errors.length > 0, msg)
  }
})
