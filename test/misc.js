/* global describe, it */

'use strict'

var validate = require('..')

describe('Cache Entry', function () {
  it('should allow null beforeRequest', function () {
    var cache = {
      beforeRequest: null
    }

    validate.cache(cache).should.be.fulfilled()
  })

  it('should allow null afterRequest', function () {
    var cache = {
      beforeRequest: null
    }

    validate.cache(cache).should.be.fulfilled()
  })
})
