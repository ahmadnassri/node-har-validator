## Promise API

```js
import * as validate from 'har-validator'
import * as validate from 'har-validator/lib/promise'
import { request, response } from 'har-validator/lib/promise'
```

### validate.afterRequest(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` _(Required)_
  a [afterRequest"](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#cache) objects

```js
validate.afterRequest(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.beforeRequest(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` _(Required)_
  a ["beforeRequest"](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#cache) objects

```js
validate.beforeRequest(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.browser(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` _(Required)_
  a [browser](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#browser) object

```js
validate.browser(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.cache(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` _(Required)_
  a [cache](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#cache) object

```js
validate.cache(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.content(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` _(Required)_
  a [content](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#content) object

```js
validate.content(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.cookie(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` _(Required)_
  a [cookie](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#cookies) object

```js
validate.cookie(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.creator(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` _(Required)_
  a [creator](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#creator) object

```js
validate.creator(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.entry(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` _(Required)_
  an [entry](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#entries) object

```js
validate.entry(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.har(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` _(Required)_
  a full [HAR](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md) object

```js
validate.har(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.header(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` _(Required)_
  a [header](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#headers) object

```js
validate.header(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.log(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` _(Required)_
  a [log](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#log) object

```js
validate.log(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.page(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` _(Required)_
  a [page](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#pages) object

```js
validate.page(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.pageTimings(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` _(Required)_
  a [pageTimings](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#pageTimings) object

```js
validate.pageTimings(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.postData(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` _(Required)_
  a [postData](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#postData) object

```js
validate.postData(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.query(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` _(Required)_
  a [queryString](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#querystring) object

```js
validate.query(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.request(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` _(Required)_
  a [request](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#request) object

```js
validate.request(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.response(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` _(Required)_
  a [response](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#response) object

```js
validate.cacheEntry(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```

### validate.timings(data)

> Returns a promise that resolves to the valid object.

- **data**: `Object` _(Required)_
  a [timings](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#timings) object

```js
validate.timings(data)
  .then((data) => console.log('✔️'))
  .catch(console.error)
```
