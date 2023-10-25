console.log("Hello Javascript")

// Array Methods


// Assignment 7.1
//  You have given array of strings. Your task is to obtain last two 
// elements of given array using slice method?

// Input;

let admins = ['john', 'paul', 'Neha', 'harry'];

console.log(admins.slice(-2))
// Ouput[('Neha', 'harry')];

// Assignment 7.2
//You have given an array of 5 elements(1-5).
//  Your task is defined as below.

const arr = [1, 4, 7, 6, 8];

//1. You have to delete 2 elements starting from index 2.
let del_array = arr.splice(2,2)
console.log("Array after deletion " ,arr)
// You have to add 3 new elements on index 1 choice.
arr.splice(1,0,97,54,33)
console.log("Array after adding 3 element " ,arr)

// Display the 2 deleted elements in console (from step 1)
console.log("Deleted items",del_array)


// Assignment 7.3

// What happens if we use negative number inside slice method?
const arr1 = [1, 4, 7, 6, 8];
console.log(arr1.slice(-2))

// Output - [6,8]


// Assignment 7.4
// Write three different methods/approaches to get last element of the array?
let arr2 = [1, 4, 7, 6, 8];

// 1. Using Array Indexing:
// You can access the last element of an array using array indexing by subtracting 1 
// from the array's length, as array indices are 0-based.
const lastElement = arr2[arr2.length - 1];
console.log(lastElement); // Output: 8

// 2. Using the pop() Method:
// The pop() method removes and returns the last element of an array.
//  You can use it to both remove and retrieve the last element.

// const lastElement1 = arr2.pop();
// console.log(lastElement1); // Output: 8
// console.log(arr2); // Updated array without the last element: [1, 4, 7, 6]

// 3. Using Array Destructuring:
// You can use array destructuring to extract the last element into a variable.
//  This is a concise and convenient way to get the last element.

const [, , , , lastElement3] = arr2;
console.log(lastElement3); // Output: 8


// Assignment 7.5

// You have given an array of nums. Create new Array with the help of nums array.
// In new Array each element will be a result of multiplication by 2 of the original array element

const arr3 = [1, 4, 7, 6, 8];

let new_arr3 = arr3.map(num => num*2)
console.log(arr3, new_arr3)
// Output - [2, 8, 14, 12, 16]

// Assignment 7.6

// You have given an array of scores in which score of each student stored.
// Create a new array with the help of original scores array in which only
// those scores exist greater than 75%

const arr4 = [10, 40, 70, 60, 80];

let new_arr4 = arr4.filter(num=> num>75)
console.log(new_arr4)
// Output - [80]


// Assignment 7.7
// You have given an array of numbers nums.
// You have to find sum of all array elements using reduce method?
let nums = [2, 3, 5, 7, 8, 4, 9];

console.log(nums.reduce((num,sum)=>num+sum,0))
// Output -38

// Assignment 7.8

// You have given an array of numbers nums. You have to find the index of value 8 
// using built-in method of array?
let nums1 = [2, 3, 5, 6, 8, 6, 4, 8];

console.log(nums1.indexOf(8))

// Assignment 7.9
// You have given an array of objects of users as below. Find the specified user with name = "John" 
// Also find the position (index+1) of that user inside the array?

let users = [
  {
    name: 'Paul',

    age: 24,

    verified: true,
  },

  {
    name: 'John',

    age: 21,

    verified: false,
  },

  {
    name: 'Neha',

    age: 19,

    verify: true,
  },
];

let user = users.find(user=>{
    return user.name ==="John"
})

console.log(user)

if (user) {
  // Get the index (position) of the user in the array
  const index = users.indexOf(user);
  // Index is 0-based, so we add 1 to get the position
  const position = index + 1;
  console.log(`Found user: ${user.name}, Position: ${position}`);
} else {
  console.log("User not found.");
}

// Assignment 7.10
// Guess the Output and explain Why?
let nums3 = [1, 2, 4, 5, [6, [8]], [9, 0]];

let res1 = nums3.flat(1);

let res2 = nums3.flatMap((elem) => elem);

console.log(res1, res2);

// Output is same for both because both flat array to level 1
//  [1, 2, 4, 5, 6, Array(1), 9, 0]
//  [1, 2, 4, 5, 6, Array(1), 9, 0]

// Assignment 7.11
// You have given an array of nums. Write a program to sort the elements of 
// array in descending order using built-in method of array.

let nums4 = [5, 1, 4, 6, 8, 3, 9];

console.log(nums4.sort((a,b)=>{
  return b-a
}))
// Output[(9, 8, 6, 5, 4, 3, 1)];

// Assignment 7.12
// Guess the Output and Explain Why?

let arr5 = [1, 2, 3, 4];
let result = arr5.splice(1, 2).pop();
console.log(result);

// Output will be 3 because after slice [2,3] it will pop last element from array

// Assignment 7.13
// You have given an array of numbers nums You have to check if all elements of the array 
// > 15 using built-in array method. return true or false
let nums5 = [16, 17, 18, 28, 22];

console.log(nums5.every(num=> num>15))
// Output - true


// Practice Questions

// Question 1: Guess the Output And explain Why?
let strArray = [1, 2, 3, 4, 5];

let result1 = strArray.reverse();

console.log(result1 == strArray);
// In JavaScript, when you compare two arrays using the == operator, you're comparing their 
// references, not their content. So, result1 == strArray will be true if both result1 and 
// strArray refer to the same array object. In this case, they do because the reverse method 
// mutates the original array, and both result1 and strArray are references to the same array object.


// Question 2: You have given two arrays below as an example. 
// Your task is to combine them into one By using array method

let ar1 = [1, 2, 3, 4, 5];

let ar2 = [6, 7, 8, 9, 10];
console.log(ar2.concat(ar1))
// ouput[(6, 7, 8, 9, 10, 1, 2, 3, 4, 5)];

// Question 3: You have given an array of letters below.
// Convert that array into string of letters Without Space

let ar3 = ['a', 'b', 'h', 'i', 's', 'h', 'e', 'k'];
console.log(ar3.join(""))
// output; ('abhishek');

// Question 4: Guess the Output and explain why?

let ar4 = [11, 62, 1, 27, 8, 5];

let sorted = ar4.sort();
console.log(sorted);
//Output-  [1, 11, 27, 5, 62, 8] because treat array item as string
// The sort() method, when used without a custom comparison function, converts the elements 
// of the array into strings and then sorts those strings lexicographically. 
// This behavior may not always produce the expected results when sorting arrays of numbers.


// Question 5: Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages 
// ('ages'), and does the following thing in order:

// Calculate the dog age in human years using the following formula: 
// if the dogAge <= 2 years old, humanAge = 2 \* dogAge. 
// If the dog is > 2 years old, humanAge = 16 + dogAge

let calcAverageHumanAge =(arr)=>{
  console.log(arr)
    let human_age = arr.map(dogAge=>{
      // console.log(dogAge)
      if (dogAge <=2){
        return 2*dogAge
      }
      else{
        return 16+dogAge
      }
    })
  return human_age
}

let  ar5  = [12,2,5,12,8,13,9];

let humanAge = calcAverageHumanAge(ar5)
console.log(humanAge)

// Question 6: Guess the Output and Explain Why?
let ar6 = [1, 2, 3, 4, 5, 6, 7, 8];

let elem = ar6.at(-1);

console.log(elem);
// Output -8

// Question 7: Guess the Output and Explain why?
let ar7 = [1, 2, 3, 4, 5, 6, 7, 8];

let result5 = ar7.slice(2, 5).splice(0, 2, 21).pop();

console.log(result5, ar7);