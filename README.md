# HAR Validator [![version][npm-version]][npm-url] [![License][npm-license]][license-url]

Extremely fast HTTP Archive ([HAR](http://www.softwareishard.com/blog/har-12-spec/)) validator using JSON Schema.

[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Code Climate][codeclimate-quality]][codeclimate-url]
[![Coverage Status][codeclimate-coverage]][codeclimate-url]
[![Dependencies][david-image]][david-url]

## Install

```shell
# to use in cli
npm install --global har-validator

# to use as a module
npm install --save har-validator
```

## Usage

```
Usage: har-validator <file ...>

Options:

  -h, --help                         output usage information
  -V, --version                      output the version number
  -s, --schema [request | response]  validate sub schema
```

###### Example


```shell
har-validator ./path/to/har.json

har-validator --schema ./path/to/request.json
```

### Code

Include the module in your code and use directly or with any of the utility methods to validate sub-schemas:

| method        | description                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| `cache`       | validates a [cache](http://www.softwareishard.com/blog/har-12-spec/#cache) object                         |
| `cacheEntry`  | validates a ["beforeRequest" or "afterRequest"](http://www.softwareishard.com/blog/har-12-spec/#cache) objects |
| `content`     | validates a [content](http://www.softwareishard.com/blog/har-12-spec/#content) object                     |
| `cookie`      | validates a [cookie](http://www.softwareishard.com/blog/har-12-spec/#cookies) object                      |
| `creator`     | validates a [creator](http://www.softwareishard.com/blog/har-12-spec/#creator) object                     |
| `entry`       | validates a [entry](http://www.softwareishard.com/blog/har-12-spec/#entries) object                       |
| `log`         | validates a [log](http://www.softwareishard.com/blog/har-12-spec/#log) object                             |
| `page`        | validates a [page](http://www.softwareishard.com/blog/har-12-spec/#pages) object                          |
| `pageTimings` | validates a [pageTimings](http://www.softwareishard.com/blog/har-12-spec/#pageTimings) object             |
| `postData`    | validates a [postData](http://www.softwareishard.com/blog/har-12-spec/#postData) object                   |
| `record`      | validates a [record](http://www.softwareishard.com/blog/har-12-spec/#headers) object                      |
| `request`     | validates a [request](http://www.softwareishard.com/blog/har-12-spec/#request) object                     |
| `response`    | validates a [response](http://www.softwareishard.com/blog/har-12-spec/#response) object                   |
| `timings`     | validates a [timings](http://www.softwareishard.com/blog/har-12-spec/#timings) object                     |

###### Example

```js
var HAR = require('har.json');
var validate = require('har-validator');

validate(HAR, function (err, valid) {
  if (err) console.log(err)

  if (valid) {
    console.log('horray!');
  }
});
```

```js
var request = require('request.json');
var validate = require('har-validator');

validate(request, function (err, valid) {
  if (err) console.log(err)

  if (valid) {
    console.log('horray!');
  }
});
```

## License

[MIT](LICENSE) &copy; [Ahmad Nassri](https://www.ahmadnassri.com)

[license-url]: https://github.com/ahmadnassri/har-validator/blob/master/LICENSE

[travis-url]: https://travis-ci.org/ahmadnassri/har-validator
[travis-image]: https://img.shields.io/travis/ahmadnassri/har-validator.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/har-validator
[npm-license]: https://img.shields.io/npm/l/har-validator.svg?style=flat-square
[npm-version]: https://img.shields.io/npm/v/har-validator.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/har-validator.svg?style=flat-square

[codeclimate-url]: https://codeclimate.com/github/Ahmadnassri/har-validator
[codeclimate-quality]: https://img.shields.io/codeclimate/github/Ahmadnassri/har-validator.svg?style=flat-square
[codeclimate-coverage]: https://img.shields.io/codeclimate/coverage/github/Ahmadnassri/har-validator.svg?style=flat-square

[david-url]: https://david-dm.org/ahmadnassri/har-validator
[david-image]: https://img.shields.io/david/ahmadnassri/har-validator.svg?style=flat-square
