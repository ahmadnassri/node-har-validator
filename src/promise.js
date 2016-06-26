import * as schemas from './schemas'
import HARError from './error'
import Ajv from 'ajv'

export function validator (schema, data = {}) {
  return new Promise((resolve, reject) => {
    // validator config
    let ajv = new Ajv({
      allErrors: true,
      schemas: schemas,
      validateSchema: false
    })

    let validate = ajv.compile(schema)

    // execute is-my-json-valid
    validate(data)

    validate.errors ? reject(new HARError(validate.errors)) : resolve(data)
  })
}

export default function har (data) {
  return validator(schemas.har, data)
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

export function record (data) {
  return validator(schemas.record, data)
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
