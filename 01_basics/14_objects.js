"use_strict"

// Objects

// Object Literals

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
console.log(myObj.email);
myObj.email = "cba321@gmail.com"
// Object.freeze(myObj)
myObj.email = "email321@gmail.com"
console.log(myObj.email);

myObj.greeting = function(){
    console.log(`Hi, ${this.name}`);
}
console.log(myObj.greeting());

