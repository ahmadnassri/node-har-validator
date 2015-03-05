# HAR Validator [![version][npm-version]][npm-url] [![License][npm-license]][license-url]

Extremely fast HTTP Archive (HAR) validator using JSON Schema.

[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Dependencies][david-image]][david-url]


## Table of contents
- [Installation](#installation) 
- [Usage](#usage) 
- [License](#license)

## Installation

install from source or through [npm](https://www.npmjs.com/):

```shell
npm install --global har-validator
```

## Usage

### CLI

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

Licensed under [The MIT License](LICENSE).

[license-url]: https://github.com/ahmadnassri/har-validator/blob/master/LICENSE

[travis-url]: https://travis-ci.org/ahmadnassri/har-validator
[travis-image]: https://img.shields.io/travis/ahmadnassri/har-validator.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/har-validator
[npm-license]: https://img.shields.io/npm/l/har-validator.svg?style=flat-square
[npm-version]: https://img.shields.io/npm/v/har-validator.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/har-validator.svg?style=flat-square

[david-url]: https://david-dm.org/ahmadnassri/har-validator
[david-image]: https://img.shields.io/david/ahmadnassri/har-validator.svg?style=flat-square
