## async API

```js
import * as validate from 'har-validator/lib/async'
import { request, response } from 'har-validator/lib/async'
```

### validate.afterRequest(data)

> Returns `true` or `false`.

- **data**: `Object` _(Required)_
  a [afterRequest"](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#cache) objects

```js
let isValid = validate.afterRequest(data)
```

### validate.beforeRequest(data)

> Returns `true` or `false`.

- **data**: `Object` _(Required)_
  a ["afterRequest"](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#cache) objects

```js
let isValid = validate.beforeRequest(data)
```

### validate.browser(data)

> Returns `true` or `false`.

- **data**: `Object` _(Required)_
  a [browser](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#browser) object

```js
let isValid = validate.browser(data)
```

### validate.cache(data)

> Returns `true` or `false`.

- **data**: `Object` _(Required)_
  a [cache](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#cache) object

```js
let isValid = validate.cache(data)
```

### validate.content(data)

> Returns `true` or `false`.

- **data**: `Object` _(Required)_
  a [content](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#content) object

```js
let isValid = validate.content(data)
```

### validate.cookie(data)

> Returns `true` or `false`.

- **data**: `Object` _(Required)_
  a [cookie](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#cookies) object

```js
let isValid = validate.cookie(data)
```

### validate.creator(data)

> Returns `true` or `false`.

- **data**: `Object` _(Required)_
  a [creator](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#creator) object

```js
let isValid = validate.creator(data)
```

### validate.entry(data)

> Returns `true` or `false`.

- **data**: `Object` _(Required)_
  an [entry](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#entries) object

```js
let isValid = validate.entry(data)
```

### validate.har(data)

> Returns `true` or `false`.

- **data**: `Object` _(Required)_
  a full [HAR](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md) object

```js
let isValid = validate.har(data)
```

### validate.header(data)

> Returns `true` or `false`.

- **data**: `Object` _(Required)_
  a [header](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#headers) object

```js
let isValid = validate.header(data)
```

### validate.log(data)

> Returns `true` or `false`.

- **data**: `Object` _(Required)_
  a [log](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#log) object

```js
let isValid = validate.log(data)
```

### validate.page(data)

> Returns `true` or `false`.

- **data**: `Object` _(Required)_
  a [page](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#pages) object

```js
let isValid = validate.page(data)
```

### validate.pageTimings(data)

> Returns `true` or `false`.

- **data**: `Object` _(Required)_
  a [pageTimings](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#pageTimings) object

```js
let isValid = validate.pageTimings(data)
```

### validate.postData(data)

> Returns `true` or `false`.

- **data**: `Object` _(Required)_
  a [postData](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#postData) object

```js
let isValid = validate.postData(data)
```

### validate.query(data)

> Returns `true` or `false`.

- **data**: `Object` _(Required)_
  a [queryString](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#querystring) object

```js
let isValid = validate.query(data)
```

### validate.request(data)

> Returns `true` or `false`.

- **data**: `Object` _(Required)_
  a [request](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#request) object

```js
let isValid = validate.request(data)
```

### validate.response(data)

> Returns `true` or `false`.

- **data**: `Object` _(Required)_
  a [response](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#response) object

```js
let isValid = validate.cacheEntry(data)
```

### validate.timings(data)

> Returns `true` or `false`.

- **data**: `Object` _(Required)_
  a [timings](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md#timings) object

```js
let isValid = validate.timings(data)
```
