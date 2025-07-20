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
// console.log(exponential.toExponential(4));        // => 2.3432e+2

let precision = 987.324
// console.log(precision.toPrecision(2));        // => 9.9e+2

let valueOf = new Number (345)
// console.log(valueOf);        // => [Number: 345]
// console.log(valueOf.valueOf());        // => 345
// console.log(typeof(valueOf.valueOf()));        // => number

let fixed = 99.099
// console.log(fixed.toFixed(2));        // => 99.10
// console.log(fixed.toFixed(1));        // => 99.1

let toLocalString = 1234567890
// console.log(toLocalString.toLocaleString("en-PK"));        // => 1,234,567,890
// console.log(toLocalString.toLocaleString("en-EG"));        // => 1,234,567,890
// console.log(toLocalString.toLocaleString("en-IN"));        // => 1,23,45,67,890



