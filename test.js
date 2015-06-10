'use strict';

const requireBowerFiles = require('require-bower-files');
const test = require('tape');

function runTest(description, main) {
  test(description, t => {
    t.plan(3);

    t.equal(
      main('a\r\nbc\n'),
      2,
      'should get maximun line length of a string.'
    );

    t.throws(
      () => main(['foo']),
      /TypeError.*not a string/,
      'should throw an error when it takes a non-string argument.'
    );

    t.throws(
      () => main(),
      /TypeError.*No arguments/,
      'should throw an error when it takes no arguments.'
    );
  });
}

runTest('require(\'max-line-length\')', require('.'));

global.window = {};
requireBowerFiles({self: true});

runTest('window.maxLineLength', window.maxLineLength);
