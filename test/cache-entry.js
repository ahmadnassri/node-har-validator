import { cache } from '../src/promise'
import { test } from 'tap'

test('cache entry', (assert) => {
  assert.plan(2)

  return Promise.all([
    cache({ beforeRequest: null }).then((out) => assert.match(out, { beforeRequest: null }, 'should allow null beforeRequest')),
    cache({ afterRequest: null }).then((out) => assert.match(out, { afterRequest: null }, 'should allow null afterRequest'))
  ])
})
