"use strict";

const matchIt = require("../lib");

let re = /(World|Mars)/;

console.log(matchIt("Hello World!", re)[1]);
// => World

console.log(matchIt("Hello Mars!", re)[1]);
// => Mars

console.log(matchIt("Hello Pluto!", re)[1]);
// => undefined
