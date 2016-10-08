import * as schemas from 'har-schema'

/*
 * copy external scheams internally
 * is-my-json-valid does not provide meaningful error messages for external schemas
 */

schemas.cache.properties.beforeRequest = schemas.cacheEntry
schemas.cache.properties.afterRequest = schemas.cacheEntry

schemas.page.properties.pageTimings = schemas.pageTimings

schemas.request.properties.cookies.items = schemas.cookie
schemas.request.properties.headers.items = schemas.record
schemas.request.properties.queryString.items = schemas.record
schemas.request.properties.postData = schemas.postData

schemas.response.properties.cookies.items = schemas.cookie
schemas.response.properties.headers.items = schemas.record
schemas.response.properties.content = schemas.content

schemas.entry.properties.request = schemas.request
schemas.entry.properties.response = schemas.response
schemas.entry.properties.cache = schemas.cache
schemas.entry.properties.timings = schemas.timings

schemas.log.properties.creator = schemas.creator
schemas.log.properties.browser = schemas.creator
schemas.log.properties.pages.items = schemas.page
schemas.log.properties.entries.items = schemas.entry

schemas.har.properties.log = schemas.log

export default schemas
