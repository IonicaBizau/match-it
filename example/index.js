"use strict";

import matchIt from "../lib/index.js";

let re = /(World|Mars)/;

console.log(matchIt("Hello World!", re));
// => World

console.log(matchIt("Hello Mars!", re)[1]);
// => Mars

console.log(matchIt("Hello Pluto!", re)[1]);
// => undefined
