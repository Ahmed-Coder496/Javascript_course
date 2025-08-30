"use_strict"

//Functions :

// Functions with Objects:

let user = {
    userName: "Ahmed",
    userAge: 12,
    userFriend: "Rao_Haseeb"
}
// console.log(user);

function userOutput(anyobject) {
    return `The username is ${anyobject.userName} and his age is ${anyobject.userAge}. His friend name is ${anyobject.userFriend}`
}
console.log(userOutput(user));

let user2 = {
    userName: "Umer",
    userAge: 13,
    userFriend: "Shaihwaiz"
}
// console.log(user);

function userOutput1(user,user2) {
    return `The username is ${user.userName} and his age is ${user2.userAge}. His friend name is ${user2.userFriend}`
}
console.log(userOutput1(user,user2));
