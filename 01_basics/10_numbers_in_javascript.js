"use_strict"

// Numbers

let number = 100
// console.log(number);        // => 100
number = new Number (100)
// console.log(number);        // => [Number: 100]

let toString = 2000
// console.log(toString.toString());        // => 2000
// console.log(toString.toString().length);        // => 4

let toStringReplace = 2000
// console.log(toString.toString().replace("000", "111"));        // => 2111

let exponential = 234.324
console.log(exponential.toExponential(3));
