"use_strict"

//Functions :

// 01_function
function func(num1, num2) {
    return num1 + num2
}
func()        // => It call's the function
console.log(func);        // => It gives function reference
console.log(func(2, 4));        // => 6

// 02_functions
function nextFunc(num1, num2) {
    let sum = num1 * num2
    return sum
}
func()        // => It call's the function
console.log(nextFunc);        // => It gives function reference
console.log(nextFunc(2, 4));        // => 6

// 03_functions
function newFunc(num1, num2) {
    let sum = num1 * num2
    return sum
}
func()        // => It call's the function
console.log(newFunc);        // => It gives function reference
console.log(newFunc(2, 4));        // => 6


