import tap from 'tap'
import { cache } from '../src/index'

tap.test('Cache Entry', (assert) => {
  Promise.all([
    cache({ beforeRequest: null }).then((out) => assert.match(out, { beforeRequest: null }, 'should allow null beforeRequest')),
    cache({ afterRequest: null }).then((out) => assert.match(out, { afterRequest: null }, 'should allow null afterRequest'))
  ])

  .then(assert.end)
})
