"use_strict"

// if , else... condition

let score = 100

if (score = 100) {        // => Low Score
    console.log(`Low Score`);
}
else {
    console.log(`High Score`);
}

// if , else... comparision condition

// <, >, <=, >=, !=, !==, ===, ==

let ahmedScore = 100
let haseebScore = 200

if (ahmedScore < haseebScore) {        // => Ahmed has less score than haseeb
    // if (ahmedScore > haseebScore) {        // => Ahmed has high score than haseeb
    // if (ahmedScore <= haseebScore) {        // => Ahmed has less score than haseeb
    // if (ahmedScore >= haseebScore) {        // => Ahmed has high score than haseeb
    // if (ahmedScore != haseebScore) {        // => Ahmed has less score than haseeb
    // if (ahmedScore !== haseebScore) {        // => Ahmed has less score than haseeb
    // if (ahmedScore === haseebScore) {        // => Ahmed has high score than haseeb
    // if (ahmedScore == haseebScore) {        // => Ahmed has high score than haseeb
    console.log(`Ahmed has less score than haseeb`);
} else {
    console.log(`Ahmed has high score than haseeb`);
}

// if , eslse if and else...  condition

let weatherTemperature = 15

if (weatherTemperature === 45) {
    console.log(`Your area temperature is 45°`);

} else if (weatherTemperature = 15) {
    console.log(`Your area temperature is 15°`);

} else if (weatherTemperature = 25) {
    console.log(`Your area temperature is 25°`);

} else if (weatherTemperature = 35) {
    console.log(`Your area temperature is 35°`);

} else {
    console.log(`Your area temperature is moving towards heat stock`);

}

// if , eslse condition by &&

let userEmail = true
let userPass = true

if (userEmail && userPass) {        // => Welcome to Our website
    console.log(`Welcome to Our website`);

} else {
    console.log(`Incirrect Useremail or Userpassword`);

}

// if , eslse condition by ||

let loggedInWithGoogle = true
let loggedInWithGithub = false

if (loggedInWithGoogle || loggedInWithGithub) {        // => Welcome to Our website
    console.log(`Welcome to Our website`);

} else {
    console.log(`Incirrect Useremail or Userpassword`);

}

// Terniary Operators

// Syntax
// Condition ? true : false

let userName = "Ahmed"
userName==="Ahmed" ? console.log(`Correct User`) : console.log(`InCorrect User`);

