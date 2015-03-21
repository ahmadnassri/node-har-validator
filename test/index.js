/* global describe, it */

'use strict'

var fixtures = require('./fixtures')
var validate = require('..')

require('should')

describe('Validator', function () {
  it('should throw error', function (done) {
    /*eslint-disable no-wrap-func */
    (function () {
      validate.log({})
    }).should.throw(Error)

    done()
  })

  it('should now throw error', function (done) {
    /*eslint-disable no-wrap-func */
    (function () {
      validate.log(fixtures.log.valid)
    }).should.not.throw(Error)

    done()
  })
})
