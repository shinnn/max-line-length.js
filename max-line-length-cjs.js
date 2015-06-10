var lineLength = require('line-length');

module.exports = function maxLineLength() {
  'use strict';
  return Math.max.apply(null, lineLength.apply(null, arguments));
};
