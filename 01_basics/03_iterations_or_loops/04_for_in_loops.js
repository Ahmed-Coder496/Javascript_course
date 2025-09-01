"use_strict"

// for_in loops

let object1 = {
    name: "Ahmed",
    // age: 12,
    phoneNum: 123467899

}

let object2 = {
    name: "Haseeb",
    age: 13,
    phoneNum: 9876543210
}
for (const obj in object1) {
    // console.log(`${obj} : ${object[obj]}`);
}

for (const obj in object1 , object2) {
    console.log(`Hi, ${object1.name} and your phone Num is ${object1.phoneNum} and Hi, ${object2.name} and your phone Num is ${object2.phoneNum} `);
}