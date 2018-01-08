# chloee
[![Build Status](https://travis-ci.org/heyitsjhu/chloee.svg?branch=master)](https://travis-ci.org/heyitsjhu/chloee)
[![Coverage Status](https://coveralls.io/repos/github/heyitsjhu/chloee/badge.svg?branch=master)](https://coveralls.io/github/heyitsjhu/chloee?branch=master)

A simple hexidecimal and rgb color converter.

## Installation

### Node

```
npm install chloee
```

### Browser
Add the following to your HTML page's `<head>` section.

```
<script src=""></script>
```

## Usage

### Node

```
const chloee = require('chloee');

chloee('c470ee');
// '196,112,238'

chloee('196,122,238');
// 'c470ee'
```

### Browser

```
var result = new Chloee('c470ee').convert();
console.log(result);    // '196,112,238'

var result = new Chloee('196,112,238').convert();
console.log(result);    // 'c470ee'
```

## License
[MIT](https://github.com/heyitsjhu/chloee/blob/master/LICENSE)