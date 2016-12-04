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
  let validate = ajv.getSchema(name + '.json')

  validator[name] = (data = {}, cb) => {
    return new Promise((resolve, reject) => {
      // execute validation
      validate(data)

      validate.errors ? reject(new HARError(validate.errors)) : resolve(data)
    })
  }
}

export function afterRequest (data) {
  return validator.afterRequest(data)
}

export function beforeRequest (data) {
  return validator.beforeRequest(data)
}

export function browser (data) {
  return validator.browser(data)
}

export function cache (data) {
  return validator.cache(data)
}

export function content (data) {
  return validator.content(data)
}

export function cookie (data) {
  return validator.cookie(data)
}

export function creator (data) {
  return validator.creator(data)
}

export function entry (data) {
  return validator.entry(data)
}

export function har (data) {
  return validator.har(data)
}

export function header (data) {
  return validator.header(data)
}

export function log (data) {
  return validator.log(data)
}

export function page (data) {
  return validator.page(data)
}

export function pageTimings (data) {
  return validator.pageTimings(data)
}

export function postData (data) {
  return validator.postData(data)
}

export function query (data) {
  return validator.query(data)
}

export function request (data) {
  return validator.request(data)
}

export function response (data) {
  return validator.response(data)
}

export function timings (data) {
  return validator.timings(data)
}
