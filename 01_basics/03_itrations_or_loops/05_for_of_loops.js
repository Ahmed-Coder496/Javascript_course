"use_strict"

// for_of loops

let array = ["Ahmed", "Haseeb", "Shahwaiz"]
for (const arr of array) {
    // console.log(arr.lastIndexOf("Shahwaiz"));
}

let object = {
    name: "Ahmed",
    age: 12,
    phoneNum: 123467899
}
for (const obj of Object.keys(object)) {
    console.log(`obj: ${object.keys}`);
}