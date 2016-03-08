## async API

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

### Validate(data)

> Returns `true` or `false`.

- **data**: `Object` *(Required)*
  a full [HAR](http://www.softwareishard.com/blog/har-12-spec/) object

```js
let isValid = validate(data)
```

### Validate.log(data)

> Returns `true` or `false`.

- **data**: `Object` *(Required)*
  a [log](http://www.softwareishard.com/blog/har-12-spec/#log) object

```js
let isValid = validate.log(data)
```

### Validate.cache(data)

> Returns `true` or `false`.

- **data**: `Object` *(Required)*
  a [cache](http://www.softwareishard.com/blog/har-12-spec/#cache) object

```js
let isValid = validate.cache(data)
```

### Validate.cacheEntry(data)

> Returns `true` or `false`.

- **data**: `Object` *(Required)*
  a ["beforeRequest" or "afterRequest"](http://www.softwareishard.com/blog/har-12-spec/#cache) objects

```js
let isValid = validate.cacheEntry(data)
```

### Validate.content(data)

> Returns `true` or `false`.

- **data**: `Object` *(Required)*
  a [content](http://www.softwareishard.com/blog/har-12-spec/#content) object

```js
let isValid = validate.content(data)
```

### Validate.cookie(data)

> Returns `true` or `false`.

- **data**: `Object` *(Required)*
  a [cookie](http://www.softwareishard.com/blog/har-12-spec/#cookies) object

```js
let isValid = validate.cookie(data)
```

### Validate.creator(data)

> Returns `true` or `false`.

- **data**: `Object` *(Required)*
  a [creator](http://www.softwareishard.com/blog/har-12-spec/#creator) object

```js
let isValid = validate.creator(data)
```

### Validate.entry(data)

> Returns `true` or `false`.

- **data**: `Object` *(Required)*
  an [entry](http://www.softwareishard.com/blog/har-12-spec/#entries) object

```js
let isValid = validate.entry(data)
```

### Validate.log(data)

> Returns `true` or `false`.

alias of [`Validate(data)`](#validate-data-callback-)

### Validate.page(data)

> Returns `true` or `false`.

- **data**: `Object` *(Required)*
  a [page](http://www.softwareishard.com/blog/har-12-spec/#pages) object

```js
let isValid = validate.page(data)
```

### Validate.pageTimings(data)

> Returns `true` or `false`.

- **data**: `Object` *(Required)*
  a [pageTimings](http://www.softwareishard.com/blog/har-12-spec/#pageTimings) object

```js
let isValid = validate.pageTimings(data)
```

### Validate.postData(data)

> Returns `true` or `false`.

- **data**: `Object` *(Required)*
  a [postData](http://www.softwareishard.com/blog/har-12-spec/#postData) object

```js
let isValid = validate.postData(data)
```

### Validate.record(data)

> Returns `true` or `false`.

- **data**: `Object` *(Required)*
  a [record](http://www.softwareishard.com/blog/har-12-spec/#headers) object

```js
let isValid = validate.record(data)
```

### Validate.request(data)

> Returns `true` or `false`.

- **data**: `Object` *(Required)*
  a [request](http://www.softwareishard.com/blog/har-12-spec/#request) object

```js
let isValid = validate.request(data)
```

### Validate.response(data)

> Returns `true` or `false`.

- **data**: `Object` *(Required)*
  a [response](http://www.softwareishard.com/blog/har-12-spec/#response) object

```js
let isValid = validate.cacheEntry(data)
```

### Validate.timings(data)

> Returns `true` or `false`.

- **data**: `Object` *(Required)*
  a [timings](http://www.softwareishard.com/blog/har-12-spec/#timings) object

```js
let isValid = validate.timings(data)
```
