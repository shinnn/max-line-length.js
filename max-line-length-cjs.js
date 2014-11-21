/*!
 * max-line-length | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/max-line-length.js
*/

var lineLength = require('line-length');

module.exports = function maxLineLength() {
  'use strict';
  return Math.max.apply(null, lineLength.apply(null, arguments));
};
