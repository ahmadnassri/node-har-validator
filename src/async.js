import * as schemas from 'har-schema'
import Ajv from 'ajv'
import HARError from './error'
var ajv

export function validator (schema, data = {}, cb) {
  // default value
  let valid = false

  // validator config
  ajv = ajv || new Ajv({
    allErrors: true,
    schemas: schemas
  })

  let validate = typeof schema === 'string'
                  ? ajv.getSchema(schema)
                  : ajv.compile(schema)

  // execute validation
  valid = validate(data)

  // callback?
  if (typeof cb === 'function') {
    return cb(validate.errors ? new HARError(validate.errors) : null, valid)
  }

  return valid
}

export function afterRequest (data, cb) {
  return validator('afterRequest.json', data, cb)
}

export function beforeRequest (data, cb) {
  return validator('beforeRequest.json', data, cb)
}

export function browser (data, cb) {
  return validator('browser.json', data, cb)
}

export function cache (data, cb) {
  return validator('cache.json', data, cb)
}

export function content (data, cb) {
  return validator('content.json', data, cb)
}

export function cookie (data, cb) {
  return validator('cookie.json', data, cb)
}

export function creator (data, cb) {
  return validator('creator.json', data, cb)
}

export function entry (data, cb) {
  return validator('entry.json', data, cb)
}

export function har (data, cb) {
  return validator('har.json', data, cb)
}

export function header (data, cb) {
  return validator('header.json', data, cb)
}

export function log (data, cb) {
  return validator('log.json', data, cb)
}

export function page (data, cb) {
  return validator('page.json', data, cb)
}

export function pageTimings (data, cb) {
  return validator('pageTimings.json', data, cb)
}

export function postData (data, cb) {
  return validator('postData.json', data, cb)
}

export function query (data, cb) {
  return validator('query.json', data, cb)
}

export function request (data, cb) {
  return validator('request.json', data, cb)
}

export function response (data, cb) {
  return validator('response.json', data, cb)
}

export function timings (data, cb) {
  return validator('timings.json', data, cb)
}
