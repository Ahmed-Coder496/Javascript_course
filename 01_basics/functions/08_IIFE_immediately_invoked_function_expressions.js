"use_strict"

// IIFE immediately invoked function expressions

function user (userName){
    console.log(`Hi, ${userName}`);
}
user("Ahmed");

// Named IIFE
(function userTwo (userNameTwo){
    console.log(`Hi, ${userNameTwo}`);
})("Haseeb");

// Unnamed IIFE
((userNameTwo)=>{
    console.log(`Hi, ${userNameTwo}`);
})("Shahwaiz")


// Notes and Interview Questions

// 1. Named IIFE contained in functions
// 2. Unnamed IIFE contianed in arrow functions
// 3. If two FEs have to be made, then should we put a semicolon in between

let val1 = 10 
let val2 = 5 
function addNum (num1, num2){
    let total = num1+num2
    return total
}
console.log(addNum(2,3));

let result1 = addNum (val1 , val2)
console.log(result1);
let result2 = addNum (10 , 2)
console.log(result2);

