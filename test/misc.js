/* global describe, it */

'use strict'

var validate = require('..')

require('should')

describe('Cache Entry', function () {
  it('should allow null beforeRequest', function (done) {
    var cache = {
      beforeRequest: null
    }

    validate.cache(cache).should.be.true

    done()
  })

  it('should allow null afterRequest', function (done) {
    var cache = {
      beforeRequest: null
    }

    validate.cache(cache).should.be.true

    done()
  })
})
