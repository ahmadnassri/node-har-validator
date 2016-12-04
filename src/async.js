import * as schemas from 'har-schema'
import Ajv from 'ajv'
import HARError from './error'

// validator config
let ajv = new Ajv({
  allErrors: true,
  schemas: schemas
})

const validator = {}

// compile each validator once
for (let name in schemas) {
  let validate = ajv.compile(schemas[name])

  validator[name] = (data = {}, cb) => {
    // execute validation
    let valid = validate(data)

    // callback?
    if (typeof cb === 'function') {
      return cb(validate.errors ? new HARError(validate.errors) : null, valid)
    }

    return valid
  }
}

export function afterRequest (data, cb) {
  return validator.afterRequest(data, cb)
}

export function beforeRequest (data, cb) {
  return validator.beforeRequest(data, cb)
}

export function browser (data, cb) {
  return validator.browser(data, cb)
}

export function cache (data, cb) {
  return validator.cache(data, cb)
}

export function content (data, cb) {
  return validator.content(data, cb)
}

export function cookie (data, cb) {
  return validator.cookie(data, cb)
}

export function creator (data, cb) {
  return validator.creator(data, cb)
}

export function entry (data, cb) {
  return validator.entry(data, cb)
}

export function har (data, cb) {
  return validator.har(data, cb)
}

export function header (data, cb) {
  return validator.header(data, cb)
}

export function log (data, cb) {
  return validator.log(data, cb)
}

export function page (data, cb) {
  return validator.page(data, cb)
}

export function pageTimings (data, cb) {
  return validator.pageTimings(data, cb)
}

export function postData (data, cb) {
  return validator.postData(data, cb)
}

export function query (data, cb) {
  return validator.query(data, cb)
}

export function request (data, cb) {
  return validator.request(data, cb)
}

export function response (data, cb) {
  return validator.response(data, cb)
}

export function timings (data, cb) {
  return validator.timings(data, cb)
}
