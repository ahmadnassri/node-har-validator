## Callback API

###### Import

```js
// default, ES5 (pre-compiled)
import validate from 'har-validator/lib/async'

// ES2015 (srouce)
import validate from 'har-validator/src/async'

// ES2015 (srouce)
import { request, response } from 'har-validator/src/async'
```

###### Require

```js
// default, ES5 (pre-compiled)
var validate = require('har-validator/lib/async')
```

### validate.default(data [, callback])

- **data**: `Object` *(Required)*
  a full [HAR](http://www.softwareishard.com/blog/har-12-spec/) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.default(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### validate.log(data [, callback])

- **data**: `Object` *(Required)*
  a [log](http://www.softwareishard.com/blog/har-12-spec/#log) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.log(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### validate.cache(data [, callback])

- **data**: `Object` *(Required)*
  a [cache](http://www.softwareishard.com/blog/har-12-spec/#cache) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.cache(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### validate.cacheEntry(data [, callback])

- **data**: `Object` *(Required)*
  a ["beforeRequest" or "afterRequest"](http://www.softwareishard.com/blog/har-12-spec/#cache) objects
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.cacheEntry(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### validate.content(data [, callback])

- **data**: `Object` *(Required)*
  a [content](http://www.softwareishard.com/blog/har-12-spec/#content) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.content(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### validate.cookie(data [, callback])

- **data**: `Object` *(Required)*
  a [cookie](http://www.softwareishard.com/blog/har-12-spec/#cookies) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.cookie(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### validate.creator(data [, callback])

- **data**: `Object` *(Required)*
  a [creator](http://www.softwareishard.com/blog/har-12-spec/#creator) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.creator(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### validate.entry(data [, callback])

- **data**: `Object` *(Required)*
  an [entry](http://www.softwareishard.com/blog/har-12-spec/#entries) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.entry(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### validate.log(data [, callback])

alias of [`Validate(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})`](#validate-data-callback-)

- **data**: `Object` *(Required)*
  a [page](http://www.softwareishard.com/blog/har-12-spec/#pages) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.page(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### validate.pageTimings(data [, callback])

- **data**: `Object` *(Required)*
  a [pageTimings](http://www.softwareishard.com/blog/har-12-spec/#pageTimings) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.pageTimings(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### validate.postData(data [, callback])

- **data**: `Object` *(Required)*
  a [postData](http://www.softwareishard.com/blog/har-12-spec/#postData, (e, valid) => {
  if (e) co- **callback**: `Function`
  callback function with signature of `(err, valid)`
nsole.error(e.errors)

  if (valid) console.log('horray!')
}) object
validate.postData(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### validate.record(data [, callback])

- **data**: `Object` *(Required)*
  a [record](http://www.softwareishard.com/blog/har-12-spec/#headers) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.record(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### validate.request(data [, callback])

- **data**: `Object` *(Required)*
  a [request](http://www.softwareishard.com/blog/har-12-spec/#request) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.request(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### validate.response(data [, callback])

- **data**: `Object` *(Required)*
  a [response](http://www.softwareishard.com/blog/har-12-spec/#response) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.cacheEntry(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### validate.timings(data [, callback])

- **data**: `Object` *(Required)*
  a [timings](http://www.softwareishard.com/blog/har-12-spec/#timings) object
- **callback**: `Function`
  callback function with signature of `(err, valid)`

```js
validate.timings(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```
