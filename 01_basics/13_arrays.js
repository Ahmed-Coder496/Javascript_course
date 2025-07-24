"use_strict"

// arrays

let strArr = ["Ahmed", "Rao_Haseeb", "Shahwaiz"]
console.log(strArr);        // => [ 'Ahmed', 'Rao_Haseeb', 'Shahwaiz' ]

let numArr = [0, 1]
console.log(numArr.length);        // => 2
console.log(numArr);        // => [ 0, 1 ]

// Arr properties

// numArr
numArr.push(2)
console.log(numArr);        // => [ 0, 1, 2 ]
numArr.pop()
console.log(numArr);        // => [ 0, 1 ]

// strArr
strArr.unshift("Ali")
console.log(strArr);        // => [ 'Ali', 'Ahmed', 'Rao_Haseeb', 'Shahwaiz' ]
strArr.shift("Ali")
console.log(strArr);        // => [ 'Ahmed', 'Rao_Haseeb', 'Shahwaiz' ]


console.log(numArr.includes(1));        // => true
console.log(numArr.indexOf(1));        // => 1
console.log(numArr.indexOf(2));        // => -1 // bsc those value whose does'nt exist in array 
console.log(numArr.join());        // => -1 // it convert array into string


