console.log("Hello Javascript")

// ES6


// Assignment 12.1
// Guess the Output and Explain Why?

// let arr = [3, 4, 5, 7, 98, 0];
// let [a, b, , c] = arr;
// console.log(a, b, c);

// Output - 3 4 7    
// the output reflects the values assigned to the variables based on the destructuring assignment.



// Assignment 12.2
// Guess the Output and Explain Why?
// let arr = [1, 3, [2, 55], [9, 8, 7]];

// let [a, , [b, c], d] = arr;

// console.log(a, b, c, d);

// Output - 1 2 55 [9,8,7] 
//  the output reflects the values assigned to the variables based on the destructuring assignment.



// Assignment 12.3
// Guess the Output and Explain Why?

// let obj = {
//   name: 'John',

//   age: 25,

//   weight: 70,
// };

// let { name: objName, age } = obj;

// console.log(name, age);           // 25
// console.log(objName, age);   John 25

// Output -   25 because here name is renamed tp onjName
// The error occurs because the variable name is not defined in this context.
//  Instead, you should use objName to access the name extracted from the object.


// Assignment 12.4
// You have given an array of nums.Create shallow copy of that array and store them
//  in another variable


let  nums  = [5,7,4,9,2,8];

let  newNums  = [...nums]
newNums.push(23)
console.log(nums, newNums)

// Output new array will be created with new references with same value


// Assignment 12.5
// You have given an array as below . Create a function which accept multiple 
// elements as an argument and return last 4 element of the array


let  nums1  = [1,2,3,4,5,6,7,8];

// input data: 1,2,3,4,5,6,7,8

function last4_values(arr, ...elements){
  let new_arr = [...arr,...elements]
  console.log(new_arr)
  return new_arr.slice(-4);
} 
console.log(last4_values(nums1,53,2,5235,62,2))

// output data: 5,6,7,8


// Assignment 12.6
// Guess the Output and Explain Why?

// let nums2 = 0;

// let result = nums2 ?? 50;

// console.log(result);

// nullish coalescing operator
// Output - O because ?? will assign second value only when first one is null or undefined

// Assignment 12.7
// You have given an object as below. You have to check wheather physics is the subject of 
// that student or not, if true find the score of physics subject using optional chaining

let student = {
  Math: {
    score: 75,
  },

  physics: {
    score: 85,
  },
};

console.log(student?.physics?.score)

// its is done with optional chaining(?.)


// Assignment 12.8
// Guess the Output and Explain Why?
let nums3 = [2, 3, 4, 5, 6];

for (let key of nums3) {
  console.log(key);
}
// Output - It will print out each element of array




// Practice Questions

// Question 1: Guess the Output and Explain Why?

let arr = [1, 2, 3, 4, 5];

let arr1 = [...arr];

arr1[2] = 10;

console.log(arr, arr1);

// Output - [1, 2, 3, 4, 5] 
//  [1, 2, 10, 4, 5]

// It will change arr1 only


// Question 2: You have given a list of variable names written in underscore. You have to 
// write a program to convert them into camel casing format


// Input:-
// user_name
// last_name
// date_of_birth
// user_password

function underscoreToCamelCase(underscoreName) {
  return underscoreName.replace(/_./g, match => match.charAt(1).toUpperCase());
}

// Example usage:
const variableNames = [
  'user_name',
  'last_name',
  'date_of_birth',
  'user_password'
];

const camelCaseNames = variableNames.map(underscoreToCamelCase);
console.log(camelCaseNames);



// Question 3: Guess the Output and Explain why?
function fun(a, b, ...c) {
  console.log(`${a}  ${b}`);

  console.log(c);

  console.log(c[0]);

  console.log(c.length);

  console.log(c.indexOf('google'));
}

fun('apple', 'sumsung', 'amazon', 'google', 'facebook');

// Output -
// apple  sumsung
//  ['amazon', 'google', 'facebook']
// amazon
// 3
// 1

// Question 4: Guess the Output and Explain Why?

const fruits = { apple: 8, orange: 7, pear: 5 };

const entries = Object.entries(fruits);

for (const [fruit, count] of entries) {
  console.log(`There are ${count}  ${fruit}s`);
}


// Output
// There are 8  apples
// There are 7  oranges
// There are 5  pears
// entries create a map of key value pair so we can access it easily



// Question 5: Write a program in which you have to set Default value in case of false
//  input value using Logical Assignment Operator?
function greetUser(name, age) {
  name = name || 'Guest'; // Set 'Guest' as the default if name is falsy
  age = age || 25;       // Set 25 as the default if age is falsy

  console.log(`Hello, ${name}! You are ${age} years old.`);
}

// Example usage:
greetUser('Alice', 30);   // Output: Hello, Alice! You are 30 years old.
greetUser();              // Output: Hello, Guest! You are 25 years old (with defaults).
greetUser('Bob');         // Output: Hello, Bob! You are 25 years old (with default age).
greetUser(null, 40);      // Output: Hello, Guest! You are 40 years old (with default name).



// Question 6: Guess the Output and Explain Why?
let arr3 = new Set([1, 2, 3, 1, 2, 1, 3, 4, 6, 7, 5]);
let length = arr3.size;
console.log(arr3, length);

// Output Set(7) {1, 2, 3, 4, 6, …} 7 
// because set neglect duplicate values

// Question 7: You have given Set below. Your task is to convert that Set into an array?

// input;

let set1 = new Set([1, 2, 3, 2, 1, 3, 4, 12, 2]);
console.log(set1)
// output;
let array1= Array.from(set1);
// let array1 = [...set1]; //it will also work
console.log(array1)
// let arr = 'Do something here to convert....';



// Question 8: Guess the Output and Explain Why?
// Note : Change values of variable to examine the result.


let number = 40;
let age = 18;
let result = number > 50 ? (age > 19 ? 'pass' : 'ageIssue') : 'numberIssue';
console.log(result);

// Output - numberIssue because first condtion is getting failed(less then 50)