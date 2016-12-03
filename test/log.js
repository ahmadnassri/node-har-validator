import HARError from '../src/error'
import { har as validate } from '../src/promise'
import { har as fixture } from './fixtures/'
import { test } from 'tap'

const errors = {
  object: new HARError([{ dataPath: '', message: "should have required property 'log'" }]),
  array: new HARError([{ dataPath: '', message: 'should be object' }]),
  undef: new HARError([{ dataPath: '', message: "should have required property 'log'" }]),
  version: new HARError([{ dataPath: '.log.version', message: 'should be string' }]),
  creator: new HARError([{ dataPath: '.log.creator.version', message: 'should be string' }]),
  date: new HARError([{ dataPath: '.log.pages[0].startedDateTime', message: 'should match pattern' }])
}

test('log', (assert) => {
  assert.plan(7)

  return Promise.all([
    validate({}).catch((err) => assert.match(err, errors.object, 'should fail with empty object')),
    validate([]).catch((err) => assert.match(err, errors.array, 'should fail with empty array')),
    validate(undefined).catch((err) => assert.match(err, errors.undef, 'should fail with undefined')),
    validate(fixture.invalid.version).catch((err) => assert.match(err, errors.version, 'should fail on bad "log.version"')),
    validate(fixture.invalid.creator).catch((err) => assert.match(err, errors.creator, 'should fail on bad "log.creator"')),
    validate(fixture.invalid.date).catch((err) => assert.match(err, errors.date, 'should fail on bad "log.pages.*.startedDateTime"')),
    validate(fixture.valid).then((out) => assert.equal(out, fixture.valid, 'should not fail with full example'))
  ])
})
