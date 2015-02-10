'use strict';

var validator = require('is-my-json-valid/require');
var validate = validator('./schema.json');

module.exports = function (data, cb) {
  var valid = validate(data);

  if (cb) {
    return cb(validate.errors, valid);
  }

  return valid;
};
