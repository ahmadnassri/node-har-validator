import HARError from '../src/error'
import tap from 'tap'
import validate from '../src/index'
import { har as fixture } from './fixtures/'

const errors = {
  object: new HARError([{ field: 'data.log', message: 'is required' }]),
  array: new HARError([{ field: 'data', message: 'is the wrong type' }]),
  undef: new HARError([{ field: 'data.log', message: 'is required' }]),
  version: new HARError([{ field: 'data.log.version', message: 'is the wrong type' }]),
  creator: new HARError([{ field: 'data.log.creator.version', message: 'is the wrong type' }]),
  date: new HARError([{ field: 'data.log.pages.0.startedDateTime', message: 'must be date-time format' }])
}

tap.test('log', (assert) => {
  Promise.all([
    validate({}).catch((err) => assert.match(err, errors.object, 'should fail with empty object')),
    validate([]).catch((err) => assert.match(err, errors.array, 'should fail with empty array')),
    validate(undefined).catch((err) => assert.match(err, errors.undef, 'should fail with undefined')),
    validate(fixture.invalid.version).catch((err) => assert.match(err, errors.version, 'should fail on bad "log.version"')),
    validate(fixture.invalid.creator).catch((err) => assert.match(err, errors.creator, 'should fail on bad "log.creator"')),
    validate(fixture.invalid.date).catch((err) => assert.match(err, errors.date, 'should fail on bad "log.pages.*.startedDateTime"')),
    validate(fixture.valid).then((out) => assert.equal(out, fixture.valid, 'should not fail with full example'))
  ])

  .then(assert.end)
})
