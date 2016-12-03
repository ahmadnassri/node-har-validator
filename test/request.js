import HARError from '../src/error'
import { request as fixture } from './fixtures/'
import { request } from '../src/promise'
import { test } from 'tap'

const errors = {
  object: new HARError([{ dataPath: '', message: "should have required property 'method'" }]),
  array: new HARError([{ dataPath: '', message: 'should be object' }]),
  undef: new HARError([{ dataPath: '', message: "should have required property 'method'" }]),
  url: new HARError([{ dataPath: '.url', message: 'should match format "uri"' }]),
  headers: new HARError([{ dataPath: '.headers', message: 'should be array' }]),
  malformed: new HARError([{ dataPath: '.headers[0]', message: "should have required property 'name'" }])
}

test('request', (assert) => {
  assert.plan(7)

  return Promise.all([
    request({}).catch((err) => assert.match(err, errors.object, 'should fail with empty object')),
    request([]).catch((err) => assert.match(err, errors.array, 'should fail with empty array')),
    request(undefined).catch((err) => assert.match(err, errors.undef, 'should fail with undefined')),
    request(fixture.invalid.url).catch((err) => assert.match(err, errors.url, 'should fail on bad "url"')),
    request(fixture.invalid.headers).catch((err) => assert.match(err, errors.headers, 'should fail on bad "headers"')),
    request(fixture.invalid.malformed).catch((err) => assert.match(err, errors.malformed, 'should fail on malformed "headers"')),
    request(fixture.valid).then((out) => assert.equal(out, fixture.valid, 'should not fail with full example'))
  ])
})
