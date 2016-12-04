import * as schemas from 'har-schema'
import Ajv from 'ajv'
import HARError from './error'

export function validator (schema, data = {}) {
  return new Promise((resolve, reject) => {
    // validator config
    let ajv = new Ajv({
      allErrors: true,
      schemas: schemas
    })

    let validate = ajv.compile(schema)

    // execute validation
    validate(data)

    validate.errors ? reject(new HARError(validate.errors)) : resolve(data)
  })
}

export function browser (data) {
  return validator(schemas.browser, data)
}

export function cache (data) {
  return validator(schemas.cache, data)
}

export function cacheEntry (data) {
  return validator(schemas.cacheEntry, data)
}

export function content (data) {
  return validator(schemas.content, data)
}

export function cookie (data) {
  return validator(schemas.cookie, data)
}

export function creator (data) {
  return validator(schemas.creator, data)
}

export function entry (data) {
  return validator(schemas.entry, data)
}

export function har (data) {
  return validator(schemas.har, data)
}

export function header (data) {
  return validator(schemas.header, data)
}

export function log (data) {
  return validator(schemas.log, data)
}

export function page (data) {
  return validator(schemas.page, data)
}

export function pageTimings (data) {
  return validator(schemas.pageTimings, data)
}

export function postData (data) {
  return validator(schemas.postData, data)
}

export function query (data) {
  return validator(schemas.query, data)
}

export function request (data) {
  return validator(schemas.request, data)
}

export function response (data) {
  return validator(schemas.response, data)
}

export function timings (data) {
  return validator(schemas.timings, data)
}
