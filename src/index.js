'use strict';

var validator = require('is-my-json-valid/require');
var validate = validator('./schema.json');

module.exports = function (data, cb) {
  var valid = false;

  if (data !== undefined) {
    // execute is-my-json-valid
    valid = validate(data);
  }

  // callback?
  if (cb) {
    return cb(validate.errors, valid);
  }

  return valid;
};
