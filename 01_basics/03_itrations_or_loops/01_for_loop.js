"use_strict"

// For Loop
// Syntax
/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    

    }*/

// This loop starts from 0 to 10 
for (let n = 0; n <= 10; n++) {
  // console.log(n);
/* Output => 
0
1
2
3
4
5
6
7
8
9
10
*/
}

// This loop is for even number
for (let i = 2; i <= 20; i += 2) {
  // console.log(i);
/* Output => 
2
4
6
8
10
12
14
16
18
20
*/
}

// This loop is for odd number
for (let i = 3; i <= 30; i += 3) {
  // console.log(i);
/* Output => 
3
6
9
12
15
18
21
24
27
30
*/
}

let arr =["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple", "Papaya", "Peach", "Guava", "Strawberry"];

for (let i = 0; i < arr.findIndex; i++) {
  // console.log(arr[i]);
}

// break Method
for (let i = 0; i <= 10; i++) {
  // console.log(i);
  if (i == 5) {
    // console.log(`Break point is 5`);
    break;
  }
}

// Continue Method
for (let i = 0; i <= 10; i++) {
  // console.log(i);
  if (i == 5) {
    // console.log(`Continue point is 5`);
    continue;
  }
}