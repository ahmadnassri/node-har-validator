import HARError from '../src/error'
import tap from 'tap'
import { request as fixture } from './fixtures/'
import { request } from '../src/promise'

// const errors = {
//   object: new HARError([{ field: 'data.method', message: 'is required' }]),
//   array: new HARError([{ field: 'data', message: 'is the wrong type' }]),
//   undef: new HARError([{ field: 'data.method', message: 'is required' }]),
//   url: new HARError([{ field: 'data.url', message: 'must be uri format' }]),
//   headers: new HARError([{ field: 'data.headers', message: 'is the wrong type' }]),
//   malformed: new HARError([{ field: 'data.headers.0.name', message: 'is required' }])
// }

tap.test('request', (assert) => {
  assert.plan(7)

  Promise.all([
    request({}).catch((err) => assertError(err, 'should fail with empty object')),
    request([]).catch((err) => assertError(err, 'should fail with empty array')),
    request(undefined).catch((err) => assertError(err, 'should fail with undefined')),
    request(fixture.invalid.url).catch((err) => assertError(err, 'should fail on bad "url"')),
    request(fixture.invalid.headers).catch((err) => assertError(err, 'should fail on bad "headers"')),
    request(fixture.invalid.malformed).catch((err) => assertError(err, 'should fail on malformed "headers"')),
    request(fixture.valid).then((out) => assert.equal(out, fixture.valid, 'should not fail with full example'))
  ])

  function assertError (err, msg) {
    assert.ok(err instanceof HARError && err.errors.length > 0, msg)
  }
})
