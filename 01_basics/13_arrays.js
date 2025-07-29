"use_strict"

// arrays

let strArr = ["Ahmed", "Rao_Haseeb", "Shahwaiz"]
// console.log(strArr);        // => [ 'Ahmed', 'Rao_Haseeb', 'Shahwaiz' ]

let numArr = [0, 1]
// console.log(numArr.length);        // => 2
// console.log(numArr);        // => [ 0, 1 ]

// Arr properties

// numArr
numArr.push(2)
// console.log(numArr);        // => [ 0, 1, 2 ]
numArr.pop()
// console.log(numArr);        // => [ 0, 1 ]

// strArr
strArr.unshift("Ali")
// console.log(strArr);        // => [ 'Ali', 'Ahmed', 'Rao_Haseeb', 'Shahwaiz' ]
strArr.shift("Ali")
// console.log(strArr);        // => [ 'Ahmed', 'Rao_Haseeb', 'Shahwaiz' ]


// console.log(numArr.includes(1));        // => true
// console.log(numArr.indexOf(1));        // => 1
// console.log(numArr.indexOf(2));        // => -1 // bsc those value whose does'nt exist in array 
// console.log(numArr.join());        // => -1 // it convert array into string

let cricketTeam = ["Babar-Azam", "Shaheen-Shah", "Shuaib-Akhtar"]

let footBallTeam = ["Ronaldo", "Messi", "Erling Haaland"]

// const gameTeam = cricketTeam.concat(footBallTeam)           // => kindly don't use concat method in modern way

const gameTeam = [...cricketTeam, ...footBallTeam]

// console.log(gameTeam);        // => ['Babar-Azam','Shaheen-Shah','Shuaib-Akhtar','Ronaldo','Messi','Erling Haaland']

let difArr = [1, 2, 3, [4, 5, 6, [1, 2, 7], 4], 3]

let newDifArr = difArr.flat(1)
// console.log(newDifArr);        // => [ 1, 2, 3, 4, 5, 6, [ 1, 2, 7 ], 4, 3 ]
let firDifArr = difArr.flat(Infinity)
// console.log(firDifArr);        // => [1, 2, 3, 4, 5,6, 1, 2, 7, 4,3]

console.log(Array.isArray("Ahmed"));        // => false
console.log(Array.from("Ahmed"));        // => [ 'A', 'h', 'm', 'e', 'd' ]
let firArr = 1
let secArr = 2
let thirArr = 3

console.log(Array.of(firArr, secArr, thirArr));



