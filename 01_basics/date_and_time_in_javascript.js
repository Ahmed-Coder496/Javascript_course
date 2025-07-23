"use_strict"

// Date And Time

let date = new Date()
console.log(date);

// Date methods:

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMonth() + 1);
// console.log(date. getTime());
// console.log(date.getTimezoneOffset());
// console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}        ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}-${date.getMilliseconds()}`);


// Date propeties:

// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
console.log(date.toLocaleDateString());        // => UK method
console.log(date.toLocaleDateString("en-PK"));        // => Pakistan method
console.log(date.toLocaleTimeString());
console.log(date.toLocaleString());



