"use_strict"

// Objects

// Singleton Objects

let newObj = new Object()
// console.log(newObj);        // => {}


// Object Literals

let idNum = Symbol()
let myObj = {
  name: "Ahmed",
  age: 18,
  email: "abc123@gmail.com",
  [idNum]: "969",
  idNum: 969,
}
// console.log(myObj);        // => {name: 'Ahmed',age: 18,email: 'abc123@gmail.com',idNum: 969,[Symbol()]: '969'}
// console.log(myObj.age);        // => 18
// console.log(myObj["name"]);        // => Ahmed
// console.log(myObj.email);        // => abc123@gmail.com
myObj.email = "cba321@gmail.com"
// Object.freeze(myObj)
myObj.email = "email321@gmail.com"
// console.log(myObj.email);        // => email321@gmail.com

myObj.greeting = function () {
  // console.log(`Hi, ${this.name}`);        // => Hi, Ahmed
}
// console.log(myObj.greeting());        // => undefined

let userOne = {
  name: "Haseeb",
  email: "haseeb@gmail.com",
  age: 16
}

let userTwo = {
  name: "Ali",
  email: "ali@gmail.com",
  id: 17
}

let userThird = { ...userOne, ...userTwo }

// console.log(userThird);        // => { name: 'Ali', email: 'ali@gmail.com', age: 16, id: 17 }                 // => Don't use this method in these days

let userObj = {
  age: 18,
  userLogged:true
}


let userDetails = Object.create(userObj)
userDetails.name = "Ahmed"
userDetails.age = 18
userDetails.email = "abc@gmail.com"

console.log(`My name is ${this.name}, I'm ${this.age}. I signUp with ${this.email} this email. Am I loggedIn?`);

console.log(userObj);





