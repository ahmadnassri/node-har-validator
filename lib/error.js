'use strict'

const ExtendableError = require('@ahmadnassri/error')

module.exports = class HARError extends ExtendableError {
  constructor (errors) {
    super('validation failed')
    this.errors = errors
  }
}
