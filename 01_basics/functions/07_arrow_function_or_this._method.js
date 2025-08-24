"use_strict"

// This method

let user = {
    teacher: "Sir Ahmed",
    Gender: "Male",
    course: "Web develpment",
    studentMessege: function () {
        // console.log(`Welcome to ${this.course}. Teached by ${this.teacher}.`);
        // console.log(this);
    }
}

// console.log(user);
user.studentMessege()
user.teacher = "Rao Haseeb"
// user.studentMessege()
// console.log(this);


// Function is for reverse string output

function reverseString(str) {
    return str.split("").reverse().join("")
}
console.log(reverseString("Are you crazy"));

// Function is for count characs

function characsount(str) {
    return str.length
}
console.log(characsount("Are you crazy"));

// Function is for max num

function maxNum(arr) {
    if (Math.max(...arr) > 99) {
        console.log(`Don't enter three digit number`);

    } else {
        console.log(`${Math.max(...arr)}`);
    }
}
console.log(maxNum([1, 3, 4, 6, 8]));


