# max-line-length.js

[![NPM version](https://img.shields.io/npm/v/max-line-length.svg)](https://www.npmjs.com/package/max-line-length)
[![Bower version](https://img.shields.io/bower/v/max-line-length.svg)](https://github.com/shinnn/max-line-length.js/releases)
[![Build Status](https://travis-ci.org/shinnn/max-line-length.js.svg?branch=master)](https://travis-ci.org/shinnn/max-line-length.js)
[![Build status](https://ci.appveyor.com/api/projects/status/bh7o4q3n2bah47le?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/max-line-length-js)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/max-line-length.js.svg?label=cov)](https://coveralls.io/r/shinnn/max-line-length.js)
[![Dependency Status](https://img.shields.io/david/shinnn/max-line-length.js.svg?label=deps)](https://david-dm.org/shinnn/max-line-length.js)
[![devDependency Status](https://img.shields.io/david/dev/shinnn/max-line-length.js.svg?label=devDeps)](https://david-dm.org/shinnn/max-line-length.js#info=devDependencies)

Get maximum line length of a string

```javascript
maxLineLength('aaaaaaaa\naaaaaaaaaaaaaaaaaa\r\naaaa\n'); //=> 18
```

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```
npm install max-line-length
```

#### [Bower](http://bower.io/)

```
bower install max-line-length
```

### Standalone

[Download the script file](https://raw.githubusercontent.com/shinnn/max-line-length.js/master/max-line-length.js) and [its dependency](https://raw.githubusercontent.com/shinnn/line-length.js/master/line-length.js).

## API

### maxLineLength(*string*)

*string*: `String`  
Return: `Array` of `Number`

It returns length of the longest line in a string. "Line" means each part of a string splitted by `\n` and `\r\n`.

```javascript
maxLineLength('one\nanother'); //=> 7
maxLineLength('\r\n'); //=> 0
maxLineLength(''); //=> 0
```

## License

[The Unlicense](./LICENSE)
