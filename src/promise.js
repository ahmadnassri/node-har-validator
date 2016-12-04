import * as schemas from 'har-schema'
import Ajv from 'ajv'
import HARError from './error'
var ajv

export function validator (schema, data = {}) {
  return new Promise((resolve, reject) => {
    // validator config
    ajv = ajv || new Ajv({
      allErrors: true,
      schemas: schemas
    })

    let validate = typeof schema === 'string'
                    ? ajv.getSchema(schema)
                    : ajv.compile(schema)

    // execute validation
    validate(data)

    validate.errors ? reject(new HARError(validate.errors)) : resolve(data)
  })
}

export function afterRequest (data) {
  return validator('afterRequest.json', data)
}

export function beforeRequest (data) {
  return validator('beforeRequest.json', data)
}

export function browser (data) {
  return validator('browser.json', data)
}

export function cache (data) {
  return validator('cache.json', data)
}

export function content (data) {
  return validator('content.json', data)
}

export function cookie (data) {
  return validator('cookie.json', data)
}

export function creator (data) {
  return validator('creator.json', data)
}

export function entry (data) {
  return validator('entry.json', data)
}

export function har (data) {
  return validator('har.json', data)
}

export function header (data) {
  return validator('header.json', data)
}

export function log (data) {
  return validator('log.json', data)
}

export function page (data) {
  return validator('page.json', data)
}

export function pageTimings (data) {
  return validator('pageTimings.json', data)
}

export function postData (data) {
  return validator('postData.json', data)
}

export function query (data) {
  return validator('query.json', data)
}

export function request (data) {
  return validator('request.json', data)
}

export function response (data) {
  return validator('response.json', data)
}

export function timings (data) {
  return validator('timings.json', data)
}
