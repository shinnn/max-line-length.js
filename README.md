# max-line-length.js

[![Build Status](https://travis-ci.org/shinnn/max-line-length.js.svg?branch=master)](https://travis-ci.org/shinnn/max-line-length.js)
[![Build status](https://ci.appveyor.com/api/projects/status/bh7o4q3n2bah47le?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/max-line-length-js)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/max-line-length.js.svg)](https://coveralls.io/r/shinnn/max-line-length.js)
[![Dependency Status](https://david-dm.org/shinnn/max-line-length.js.svg)](https://david-dm.org/shinnn/max-line-length.js)
[![devDependency Status](https://david-dm.org/shinnn/max-line-length.js/dev-status.svg)](https://david-dm.org/shinnn/max-line-length.js#info=devDependencies)

Get maximum line length of a string

```javascript
maxLineLength('aaaaaaaa\naaaaaaaaaaaaaaaaaa\r\naaaa\n'); //=> 18
```

## Installation

### Package managers

#### [npm](https://www.npmjs.org/) [![NPM version](https://badge.fury.io/js/max-line-length.svg)](https://www.npmjs.org/package/max-line-length)

```sh
npm install max-line-length
```

#### [Bower](http://bower.io/) [![Bower version](https://badge.fury.io/bo/max-line-length.svg)](https://github.com/shinnn/max-line-length.js/releases)

```sh
bower install max-line-length
```

#### [Duo](http://duojs.org/)

```javascript
var maxLineLength = require('shinnn/max-line-length.js');
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

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
