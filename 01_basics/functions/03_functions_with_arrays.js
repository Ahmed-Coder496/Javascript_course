"use_strict"

//Functions :

// Functions with Arrays:

let userName = ["Ahmed", "Ali", "Farooq"]
console.log(userName);        // => [ 'Ahmed', 'Ali', 'Farooq' ]

let userAge = [12, 16, 20]
console.log(userName);        // => [ 'Ahmed', 'Ali', 'Farooq' ]

function func(userName,userAge){
    return `The First userName is ${userName[0]} and his age is ${userAge[0]}. The First userName is ${userName[1]} and his age is ${userAge[1]}. The First userName is ${userName[2]} and his age is ${userAge[2]}.`
}
console.log(func(userName,userAge));        // => The First userName is Ahmed and his age is 12. The First userName is Ali and his age is 16. The First userName is Farooq and his age is 20.
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



