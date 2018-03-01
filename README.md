# chloee
[![Build Status](https://travis-ci.org/heyitsjhu/chloee.svg?branch=master)](https://travis-ci.org/heyitsjhu/chloee)
[![Coverage Status](https://coveralls.io/repos/github/heyitsjhu/chloee/badge.svg?branch=master)](https://coveralls.io/github/heyitsjhu/chloee?branch=master)

A simple hexidecimal and rgb color converter.

## Use Chloee in Node

Install:
```
npm install chloee
```

Then, use it like so:
```
const chloee = require('chloee');

chloee('c470ee');
// '196,112,238'

chloee('196,122,238');
// 'c470ee'
```

## Use Chloee in the Browser
Add the following to your HTML page's `<head>` section.

```
<script src="https://d2uu82licdpgvh.cloudfront.net/chloee.min.js"></script>
```

You can now use Chloee via `chloee()`:
```
var result = chloee('c470ee');
console.log(result);    // '196,112,238'

var result = chloee('196,112,238');
console.log(result);    // 'c470ee'
```

## License
[MIT](https://github.com/heyitsjhu/chloee/blob/master/LICENSE)
