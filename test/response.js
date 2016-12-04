import HARError from '../src/error'
import invalid from './fixtures/response/invalid'
import valid from './fixtures/response/valid'
import { response } from '../src/promise'
import { test } from 'tap'

const errors = {
  object: new HARError([{ dataPath: '', message: "should have required property 'status'" }]),
  array: new HARError([{ dataPath: '', message: 'should be object' }]),
  undef: new HARError([{ dataPath: '', message: "should have required property 'status'" }]),
  bodySize: new HARError([{ dataPath: '.bodySize', message: 'should be integer' }]),
  headers: new HARError([{ dataPath: '.headers', message: 'should be array' }]),
  malformed: new HARError([{ dataPath: '.headers[0]', message: "should have required property 'name'" }])
}

test('response', (assert) => {
  assert.plan(7)

  return Promise.all([
    response({}).catch((err) => assert.match(err, errors.object, 'should fail with empty object')),
    response([]).catch((err) => assert.match(err, errors.array, 'should fail with empty array')),
    response(undefined).catch((err) => assert.match(err, errors.undef, 'should fail with undefined')),
    response(invalid.bodySize).catch((err) => assert.match(err, errors.bodySize, 'should fail on bad "bodySize"')),
    response(invalid.headers).catch((err) => assert.match(err, errors.headers, 'should fail on bad "headers"')),
    response(invalid.malformed).catch((err) => assert.match(err, errors.malformed, 'should fail on malformed "headers"')),
    response(valid).then((out) => assert.equal(out, valid, 'should not fail with full example'))
  ])
})
