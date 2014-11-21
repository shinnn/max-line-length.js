/*!
 * max-line-length | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/max-line-length.js
*/

window.maxLineLength = function maxLineLength() {
  'use strict';
  return Math.max.apply(null, window.lineLength.apply(null, arguments));
};
