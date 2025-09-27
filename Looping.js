// Template literals
let name = "Kristan";
let age = 20;
console.log(`Hello, my name is ${name} and I am ${age} years old.`);

// Destructuring
let = user = { name: "Kristan", age: 20 };

let { name: userName, age: userAge } = user;
console.log(userName, userAge);

// Spread operator
let numbers = [1, 2, 3];
let moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers);

// Rest operator
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4));
