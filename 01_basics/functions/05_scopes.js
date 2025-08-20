"use_strict"

// Scopes in js

var c = 300        // => 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 100        // => 100
    var c = 900        // => 900  var overwrite to each other so don't use var
    console.log("INNER: ", a);        // => 10
    
}

console.log(a);        // => 300
console.log(b);        // => b is not defined on outside
console.log(c);        // => c is not defined on outside


