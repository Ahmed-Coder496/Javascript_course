"use_strict"

// Objects

let idNum = Symbol()
let myObj = {
    name: "Ahmed",
    age : 18,
    email:"abc123@gmail.com",
    [idNum]:"969",
    idNum:969,
}
console.log(myObj);
console.log(myObj.age);
console.log(myObj["name"]);
