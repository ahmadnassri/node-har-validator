import HARError from '../src/error'
import { response as fixture } from './fixtures/'
import { response } from '../src/promise'
import { test } from 'tap'

const errors = {
  object: new HARError([{ field: 'data.status', message: 'is required' }]),
  array: new HARError([{ field: 'data', message: 'is the wrong type' }]),
  undef: new HARError([{ field: 'data.status', message: 'is required' }]),
  bodySize: new HARError([{ field: 'data.bodySize', message: 'is the wrong type' }]),
  headers: new HARError([{ field: 'data.headers', message: 'is the wrong type' }]),
  malformed: new HARError([{ field: 'data.headers.0.name', message: 'is required' }])
}

test('response', (assert) => {
  assert.plan(7)

  Promise.all([
    response({}).catch((err) => assert.match(err, errors.object, 'should fail with empty object')),
    response([]).catch((err) => assert.match(err, errors.array, 'should fail with empty array')),
    response(undefined).catch((err) => assert.match(err, errors.undef, 'should fail with undefined')),
    response(fixture.invalid.bodySize).catch((err) => assert.match(err, errors.bodySize, 'should fail on bad "bodySize"')),
    response(fixture.invalid.headers).catch((err) => assert.match(err, errors.headers, 'should fail on bad "headers"')),
    response(fixture.invalid.malformed).catch((err) => assert.match(err, errors.malformed, 'should fail on malformed "headers"')),
    response(fixture.valid).then((out) => assert.equal(out, fixture.valid, 'should not fail with full example'))
  ])
})
