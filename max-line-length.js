window.maxLineLength = function maxLineLength() {
  'use strict';
  return Math.max.apply(null, window.lineLength.apply(null, arguments));
};
