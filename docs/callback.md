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

### Validate(data [, callback])

- **data**: `Object` *(Required)*
  a full [HAR](http://www.softwareishard.com/blog/har-12-spec/) object
- **callback**: `Function`
  callback function with signature of `(err, stream)`

```js
validate(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### Validate.log(data [, callback])

- **data**: `Object` *(Required)*
  a [log](http://www.softwareishard.com/blog/har-12-spec/#log) object
- **callback**: `Function`
  callback function with signature of `(err, stream)`

```js
validate.log(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### Validate.cache(data [, callback])

- **data**: `Object` *(Required)*
  a [cache](http://www.softwareishard.com/blog/har-12-spec/#cache) object
- **callback**: `Function`
  callback function with signature of `(err, stream)`

```js
validate.cache(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### Validate.cacheEntry(data [, callback])

- **data**: `Object` *(Required)*
  a ["beforeRequest" or "afterRequest"](http://www.softwareishard.com/blog/har-12-spec/#cache) objects
- **callback**: `Function`
  callback function with signature of `(err, stream)`

```js
validate.cacheEntry(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### Validate.content(data [, callback])

- **data**: `Object` *(Required)*
  a [content](http://www.softwareishard.com/blog/har-12-spec/#content) object
- **callback**: `Function`
  callback function with signature of `(err, stream)`

```js
validate.content(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### Validate.cookie(data [, callback])

- **data**: `Object` *(Required)*
  a [cookie](http://www.softwareishard.com/blog/har-12-spec/#cookies) object
- **callback**: `Function`
  callback function with signature of `(err, stream)`

```js
validate.cookie(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### Validate.creator(data [, callback])

- **data**: `Object` *(Required)*
  a [creator](http://www.softwareishard.com/blog/har-12-spec/#creator) object
- **callback**: `Function`
  callback function with signature of `(err, stream)`

```js
validate.creator(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### Validate.entry(data [, callback])

- **data**: `Object` *(Required)*
  an [entry](http://www.softwareishard.com/blog/har-12-spec/#entries) object
- **callback**: `Function`
  callback function with signature of `(err, stream)`

```js
validate.entry(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### Validate.log(data [, callback])

alias of [`Validate(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})`](#validate-data-callback-)

- **data**: `Object` *(Required)*
  a [page](http://www.softwareishard.com/blog/har-12-spec/#pages) object
- **callback**: `Function`
  callback function with signature of `(err, stream)`

```js
validate.page(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### Validate.pageTimings(data [, callback])

- **data**: `Object` *(Required)*
  a [pageTimings](http://www.softwareishard.com/blog/har-12-spec/#pageTimings) object
- **callback**: `Function`
  callback function with signature of `(err, stream)`

```js
validate.pageTimings(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### Validate.postData(data [, callback])

- **data**: `Object` *(Required)*
  a [postData](http://www.softwareishard.com/blog/har-12-spec/#postData, (e, valid) => {
  if (e) co- **callback**: `Function`
  callback function with signature of `(err, stream)`
nsole.error(e.errors)

  if (valid) console.log('horray!')
}) object
validate.postData(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### Validate.record(data [, callback])

- **data**: `Object` *(Required)*
  a [record](http://www.softwareishard.com/blog/har-12-spec/#headers) object
- **callback**: `Function`
  callback function with signature of `(err, stream)`

```js
validate.record(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### Validate.request(data [, callback])

- **data**: `Object` *(Required)*
  a [request](http://www.softwareishard.com/blog/har-12-spec/#request) object
- **callback**: `Function`
  callback function with signature of `(err, stream)`

```js
validate.request(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### Validate.response(data [, callback])

- **data**: `Object` *(Required)*
  a [response](http://www.softwareishard.com/blog/har-12-spec/#response) object
- **callback**: `Function`
  callback function with signature of `(err, stream)`

```js
validate.cacheEntry(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```

### Validate.timings(data [, callback])

- **data**: `Object` *(Required)*
  a [timings](http://www.softwareishard.com/blog/har-12-spec/#timings) object
- **callback**: `Function`
  callback function with signature of `(err, stream)`

```js
validate.timings(data, (e, valid) => {
  if (e) console.error(e.errors)

  if (valid) console.log('horray!')
})
```
