
# match-it

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Travis](https://img.shields.io/travis/IonicaBizau/match-it.svg)](https://travis-ci.org/IonicaBizau/match-it/) [![Version](https://img.shields.io/npm/v/match-it.svg)](https://www.npmjs.com/package/match-it) [![Downloads](https://img.shields.io/npm/dt/match-it.svg)](https://www.npmjs.com/package/match-it) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A safer regex match.

## :cloud: Installation

```sh
$ npm i --save match-it
```


## :clipboard: Example



```js
const matchIt = require("match-it");

let re = /(World|Mars)/;

console.log(matchIt("Hello World!", re)[1]);
// => World

console.log(matchIt("Hello Mars!", re)[1]);
// => Mars

console.log(matchIt("Hello Pluto!", re)[1]);
// => undefined
```

## :memo: Documentation


### `matchIt(input, re)`
Finds the regex matches in the string.

#### Params
- **String** `input`: The string input.
- **RegExp** `re`: The regular expression.

#### Return
- **Array** The `match` result or an empty array.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`clp`](https://github.com/IonicaBizau/clp)—A tiny and fast command line arguments parser.
 - [`codementor`](https://github.com/IonicaBizau/codementor#readme)—A scraper for codementor.io.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
