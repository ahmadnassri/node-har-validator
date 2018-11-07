<!-- lint disable no-shortcut-reference-link -->
## Callback API

```js
import * as validate from 'har-validator/lib/async'
import { request, response } from 'har-validator/lib/async'
```

### validate.afterRequest(data [, callback])

- **data**: `Object` _(Required)_
  a [afterRequest"](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#cache) objects
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.afterRequest(data, (err, valid) => {
  if (err) console.error(err.errors)

  if (valid) console.log('✔️')
})
```

### validate.beforeRequest(data [, callback])

- **data**: `Object` _(Required)_
  a ["beforeRequest"](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#cache) objects
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.beforeRequest(data, (err, valid) => {
  if (err) console.error(err.errors)

  if (valid) console.log('✔️')
})
```

### validate.browser(data [, callback])

- **data**: `Object` _(Required)_
  a [browser](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#browser) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.browser(data, (err, valid) => {
  if (err) console.error(err.errors)

  if (valid) console.log('✔️')
})
```

### validate.cache(data [, callback])

- **data**: `Object` _(Required)_
  a [cache](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#cache) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.cache(data, (err, valid) => {
  if (err) console.error(err.errors)

  if (valid) console.log('✔️')
})
```

### validate.content(data [, callback])

- **data**: `Object` _(Required)_
  a [content](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#content) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.content(data, (err, valid) => {
  if (err) console.error(err.errors)

  if (valid) console.log('✔️')
})
```

### validate.cookie(data [, callback])

- **data**: `Object` _(Required)_
  a [cookie](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#cookies) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.cookie(data, (err, valid) => {
  if (err) console.error(err.errors)

  if (valid) console.log('✔️')
})
```

### validate.creator(data [, callback])

- **data**: `Object` _(Required)_
  a [creator](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#creator) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.creator(data, (err, valid) => {
  if (err) console.error(err.errors)

  if (valid) console.log('✔️')
})
```

### validate.entry(data [, callback])

- **data**: `Object` _(Required)_
  an [entry](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#entries) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.entry(data, (err, valid) => {
  if (err) console.error(err.errors)

  if (valid) console.log('✔️')
})
```

### validate.har(data [, callback])

- **data**: `Object` _(Required)_
  a full [HAR](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.har(data, (err, valid) => {
  if (err) console.error(err.errors)

  if (valid) console.log('✔️')
})
```

### validate.header(data [, callback])

- **data**: `Object` _(Required)_
  a [header](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#headers) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.header(data, (err, valid) => {
  if (err) console.error(err.errors)

  if (valid) console.log('✔️')
})
```

### validate.log(data [, callback])

- **data**: `Object` _(Required)_
  a [log](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#log) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.log(data, (err, valid) => {
  if (err) console.error(err.errors)

  if (valid) console.log('✔️')
})
```

### validate.page(data [, callback])

- **data**: `Object` _(Required)_
  a [page](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#page) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.page(data, (err, valid) => {
  if (err) console.error(err.errors)

  if (valid) console.log('✔️')
})
```

### validate.pageTimings(data [, callback])

- **data**: `Object` _(Required)_
  a [pageTimings](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#pageTimings) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.pageTimings(data, (err, valid) => {
  if (err) console.error(err.errors)

  if (valid) console.log('✔️')
})
```

### validate.postData(data [, callback])

- **data**: `Object` _(Required)_
  a [postData](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#postdata') object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.postData(data, (err, valid) => {
  if (err) console.error(err.errors)

  if (valid) console.log('✔️')
})
```

### validate.query(data [, callback])

- **data**: `Object` _(Required)_
  a [queryString](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#querystring) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.query(data, (err, valid) => {
  if (err) console.error(err.errors)

  if (valid) console.log('✔️')
})
```

### validate.request(data [, callback])

- **data**: `Object` _(Required)_
  a [request](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#request) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.request(data, (err, valid) => {
  if (err) console.error(err.errors)

  if (valid) console.log('✔️')
})
```

### validate.response(data [, callback])

- **data**: `Object` _(Required)_
  a [response](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#response) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.cacheEntry(data, (err, valid) => {
  if (err) console.error(err.errors)

  if (valid) console.log('✔️')
})
```

### validate.timings(data [, callback])

- **data**: `Object` _(Required)_
  a [timings](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#timings) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.timings(data, (err, valid) => {
  if (err) console.error(err.errors)

  if (valid) console.log('✔️')
})
```
