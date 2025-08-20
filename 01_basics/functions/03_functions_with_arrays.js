"use_strict"

//Functions :

// Functions with Arrays:

let userName = ["Ahmed", "Ali", "Farooq"]
console.log(userName);        // => [ 'Ahmed', 'Ali', 'Farooq' ]

function func0(getArray){
    return `The First userName is ${getArray[0]}. The Second userName is ${getArray[1]}. The Third userName is ${getArray[2]}.`
}
console.log(func0(userName));        // => The First userName is Ahmed. The Second userName is Ali. The Third userName is Farooq.

let userAge = [12, 16, 20]
console.log(userName);        // => [ 'Ahmed', 'Ali', 'Farooq' ]

function func1(userName,userAge){
    return `The First userName is ${userName[0]} and his age is ${userAge[0]}. The Second userName is ${userName[1]} and his age is ${userAge[1]}. The Third userName is ${userName[2]} and his age is ${userAge[2]}.`
}
console.log(func1(userName,userAge));        // => The First userName is Ahmed and his age is 12. The Second userName is Ali and his age is 16. The Third userName is Farooq and his age is 20.

// Over write values

/*
console.log(func([
    "Abdullah",
    "Younus",
    "Zahid"
],[
    14,
    17,
    18
]));        // => The First userName is Abdullah and his age is 14. The First userName is Younus and his age is 17. The First userName is Zahid and his age is 18.
*/