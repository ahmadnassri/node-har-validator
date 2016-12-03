var validate = require(`../lib/node${process.version.slice(1, 2)}/promise`)
var fixture = require('./fixtures/har/valid')
var test = require('tap').test

test('promises', (assert) => {
  assert.plan(2)

  assert.type(validate.har(fixture), Promise, 'default import is a promise')

  validate.har(fixture).then((out) => assert.equal(out, fixture, 'resolves with the original data'))
})
