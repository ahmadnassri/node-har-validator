import HARError from '../src/error'
import tap from 'tap'
import { request as fixture } from './fixtures/'
import { request } from '../src/index'

const errors = {
  object: new HARError([{ field: 'data.method', message: 'is required' }]),
  array: new HARError([{ field: 'data', message: 'is the wrong type' }]),
  undef: new HARError([{ field: 'data.method', message: 'is required' }]),
  url: new HARError([{ field: 'data.url', message: 'must be uri format' }]),
  headers: new HARError([{ field: 'data.headers', message: 'is the wrong type' }]),
  malformed: new HARError([{ field: 'data.headers.0.name', message: 'is required' }])
}

tap.test('request', (assert) => {
  Promise.all([
    request({}).catch((err) => assert.match(err, errors.object, 'should fail with empty object')),
    request([]).catch((err) => assert.match(err, errors.array, 'should fail with empty array')),
    request(undefined).catch((err) => assert.match(err, errors.undef, 'should fail with undefined')),
    request(fixture.invalid.url).catch((err) => assert.match(err, errors.url, 'should fail on bad "url"')),
    request(fixture.invalid.headers).catch((err) => assert.match(err, errors.headers, 'should fail on bad "headers"')),
    request(fixture.invalid.malformed).catch((err) => assert.match(err, errors.malformed, 'should fail on malformed "headers"')),
    request(fixture.valid).then((out) => assert.equal(out, fixture.valid, 'should not fail with full example'))
  ])

  .then(assert.end)
})
