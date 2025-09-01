"use_strict"

// for_in loops

let object = {
    name: "Ahmed",
    age: 12,
    phoneNum: 123467899
}
for (const obj in object) {
    console.log(`${obj} : ${object[obj]}`);
}