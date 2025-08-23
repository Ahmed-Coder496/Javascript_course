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
console.log(this);






let user = "Ahmed"
function userReverse (){}