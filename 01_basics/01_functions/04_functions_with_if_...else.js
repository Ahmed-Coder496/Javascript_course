"use_strict"

//Functions :

// Functions with if...else:

function func(userName,Password) {
    if (userName === "Ahmed" && Password === 1234) {
        return `Correct Answer`
    }
    else {
        return `Incorrect Answer`
    }
}
console.log(func("Haseeb",1234));        // => incorrect Answer
console.log(func("Ahmed",1234));        // => correct Answer

function func1(isLogedIn) {
    if (!isLogedIn) {
        return `Incorrect Username And Password`
    }
    else{
        return`Correct Answer`
    }
}
// console.log(func1(true));        // => Correct Answer
// console.log(func1(false));        // => Incorrect Username And Password

