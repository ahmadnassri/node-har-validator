## Promise API


```js
import validate from 'har-validator'
import validate from 'har-validator/lib/{node-version}/promise'
import { request, response } from 'har-validator/lib/{node-version}/promise'
```

### validate.default(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a full [HAR](http://www.softwareishard.com/blog/har-12-spec/) object

```js
validate(data)
  .then((data) => console.log('horray!'))
  .catch(console.error)
```

### validate.log(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [log](http://www.softwareishard.com/blog/har-12-spec/#log) object

```js
validate.log(data)
  .then((data) => console.log('horray!'))
  .catch(console.error)
```

### validate.cache(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [cache](http://www.softwareishard.com/blog/har-12-spec/#cache) object

```js
validate.cache(data)
  .then((data) => console.log('horray!'))
  .catch(console.error)
```

### validate.cacheEntry(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a ["beforeRequest" or "afterRequest"](http://www.softwareishard.com/blog/har-12-spec/#cache) objects

```js
validate.cacheEntry(data)
  .then((data) => console.log('horray!'))
  .catch(console.error)
```

### validate.content(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [content](http://www.softwareishard.com/blog/har-12-spec/#content) object

```js
validate.content(data)
  .then((data) => console.log('horray!'))
  .catch(console.error)
```

### validate.cookie(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [cookie](http://www.softwareishard.com/blog/har-12-spec/#cookies) object

```js
validate.cookie(data)
  .then((data) => console.log('horray!'))
  .catch(console.error)
```

### validate.creator(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [creator](http://www.softwareishard.com/blog/har-12-spec/#creator) object

```js
validate.creator(data)
  .then((data) => console.log('horray!'))
  .catch(console.error)
```

### validate.entry(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  an [entry](http://www.softwareishard.com/blog/har-12-spec/#entries) object

```js
validate.entry(data)
  .then((data) => console.log('horray!'))
  .catch(console.error)
```

### validate.log(data)

alias of [`Validate(data)`](#validate-data-callback-)

### validate.page(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [page](http://www.softwareishard.com/blog/har-12-spec/#pages) object

```js
validate.page(data)
  .then((data) => console.log('horray!'))
  .catch(console.error)
```

### validate.pageTimings(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [pageTimings](http://www.softwareishard.com/blog/har-12-spec/#pageTimings) object

```js
validate.pageTimings(data)
  .then((data) => console.log('horray!'))
  .catch(console.error)
```

### validate.postData(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [postData](http://www.softwareishard.com/blog/har-12-spec/#postData) object

```js
validate.postData(data)
  .then((data) => console.log('horray!'))
  .catch(console.error)
```

### validate.record(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [record](http://www.softwareishard.com/blog/har-12-spec/#headers) object

```js
validate.record(data)
  .then((data) => console.log('horray!'))
  .catch(console.error)
```

### validate.request(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [request](http://www.softwareishard.com/blog/har-12-spec/#request) object

```js
validate.request(data)
  .then((data) => console.log('horray!'))
  .catch(console.error)
```

### validate.response(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [response](http://www.softwareishard.com/blog/har-12-spec/#response) object

```js
validate.cacheEntry(data)
  .then((data) => console.log('horray!'))
  .catch(console.error)
```

### validate.timings(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` *(Required)*
  a [timings](http://www.softwareishard.com/blog/har-12-spec/#timings) object

```js
validate.timings(data)
  .then((data) => console.log('horray!'))
  .catch(console.error)
```
