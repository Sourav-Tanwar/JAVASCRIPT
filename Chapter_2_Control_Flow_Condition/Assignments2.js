console.log("Hello Javascript")

//  CONTROL FLOW AND CONDITIONALS


// Assignment 2.1

// let i = 4;

// for (let j = 0; i < 10; i++) {
//   if (j === 1 || i === 6) {
//     continue;
//   } else {
//     console.log(i, j);

//     if (i === 7) {
//       break;
//     }
//   }
// }

// ANS
// 4 0
//  5 0
//  7 0

// Assignment 2.2

// let i = 0;

// for (i; i < 5; i++) {
//   console.log(i);
// }

// It will Print 0 1 2 3 4 

// Assignment 2.3
//  Write a simple Program in which You have to print
//  first 10 numbers in descending order (10...1)?

// for ( let i=0;i<10;i++){
//     console.log(10-i)
// }
 // Working fine

// Assignment 2.4
// Lets say John is looking a new country to live in. He want to
// live in a country that speaks English, has less than 10 million
// people. One of the food option between these two must present
// Spanish food OR English food.

// if (language ==="English"){
//     if(population <10000000){
//         if(food ==="Spanish" || food === "English"){
//             console.log("This country is suitable for JOHN to live in ")
//         }
//     }
// }
//Above contain all conditions to be satisfied

// Assignment 2.5

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);
// This will show "i is not defined error" because i is accessable in for loop scope only,

// Assignment 2.6
// use nested-if statement to check your age>18
// than check your height height > 5.10.
// If both true show any message(I can sit in exam) in the console?

let age = 19;
let height  = 5.10
if(age >18){
    if(height >5.10){
        console.log("I can sit in exam")
    }
    else{
        console.log("Not eligible due to height")
    }
}
else{
    console.log("Not eligible due to age")
}

// Assignment 2.7
// Create two variables grade and passingYear.Check
//  if your grade == "A" and passingYear < 2020 with the help 
//  of ternary operator(Not allowed to use any logical operator).
//  If both condition true print on console Qualify. Otherwise Fail

let grade = "A";
let passingYear= 2019;

let result  = grade ==="A" ? passingYear <2020 ? "PASS" : "Fail due to Year"  : "FAIL due to GRADE"
console.log(result)
 