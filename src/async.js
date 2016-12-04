import * as schemas from 'har-schema'
import Ajv from 'ajv'
import HARError from './error'

export function validator (schema, data = {}, cb) {
  // default value
  let valid = false

  // validator config
  let ajv = new Ajv({
    allErrors: true,
    schemas: schemas
  })

  let validate = ajv.compile(schema)

  // execute validation
  valid = validate(data)

  // callback?
  if (typeof cb === 'function') {
    return cb(validate.errors ? new HARError(validate.errors) : null, valid)
  }

  return valid
}

export function afterRequest (data, cb) {
  return validator(schemas.afterRequest, data, cb)
}

export function beforeRequest (data, cb) {
  return validator(schemas.beforeRequest, data, cb)
}

export function browser (data, cb) {
  return validator(schemas.browser, data, cb)
}

export function cache (data, cb) {
  return validator(schemas.cache, data, cb)
}

export function content (data, cb) {
  return validator(schemas.content, data, cb)
}

export function cookie (data, cb) {
  return validator(schemas.cookie, data, cb)
}

export function creator (data, cb) {
  return validator(schemas.creator, data, cb)
}

export function entry (data, cb) {
  return validator(schemas.entry, data, cb)
}

export function har (data, cb) {
  return validator(schemas.har, data, cb)
}

export function header (data, cb) {
  return validator(schemas.header, data, cb)
}

export function log (data, cb) {
  return validator(schemas.log, data, cb)
}

export function page (data, cb) {
  return validator(schemas.page, data, cb)
}

export function pageTimings (data, cb) {
  return validator(schemas.pageTimings, data, cb)
}

export function postData (data, cb) {
  return validator(schemas.postData, data, cb)
}

export function query (data, cb) {
  return validator(schemas.query, data, cb)
}

export function request (data, cb) {
  return validator(schemas.request, data, cb)
}

export function response (data, cb) {
  return validator(schemas.response, data, cb)
}

export function timings (data, cb) {
  return validator(schemas.timings, data, cb)
}
