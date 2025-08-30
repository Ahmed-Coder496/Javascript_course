"use_strict"

let score = 0

if (score) {        // => Hi, Ahmed
    console.log(`Low score`);
    
} else {
    console.log(`Your score is ${score}`);
    
}

// Truthy Values: Truthy values are those values which are assume that these are truth values

// false
// 0
// -0
// BigIn
// 0n
// ""
// null
// undefined
// NaN


// Nullish Coalescing Operator (??): null undefined

let num1;
// num1 = null ?? 10
num1 = undefined ?? 10 ?? 20
console.log(num1);
