"use_strict"

// Stack and Heap Memory

// Stack => stack means that "it gaves a copy of primitive types" and stack is only for primitive types

let userName = "Ahmed"
let userId = userName
// userId = "Ahmed123"

// console.log(userName)
// console.log(userId)

// Heap => heap means that "it gaves a orignal referance of non-primitive types" and stack is only for non-primitive types

let industryOne = {
    name : "Microsoft",
    founderName : "Bill Gates"
}

let industryTwo = industryOne;
industryTwo.name = "Jensen Huang"


console.log(industryOne);
console.log(industryTwo);

