console.log("Hello Javascript")

// FUNCTIONS


// Assignment 3.1

function  describeYourState(Population,traditional_food,historical_place ){
    return(`My state population is ${Population} Its traditional food is ${traditional_food} and historical place name is ${historical_place}`)
}

console.log(describeYourState(5000,"Samosa","Muzaffarnagar"))

// Assignment 3.2

let detail = function (Population,traditional_food,historical_place ){
    return(`My state population is ${Population} Its traditional food is ${traditional_food} and historical place name is ${historical_place}`)
}

console.log(detail(5000,"Samosa","Muzaffarnagar"))


// Assignment 3.3

function addition(num1 = 0, num2=0) {
    return num1 + num2;
  }

  console.log(addition());
   // Output: 0 (since both parameters are using default values of 0)


// Assignment 3.4
// Identify which type of value passed below into the function greet().
// What will be the return value of greet ?

let person = {
    name: 'john',
  
    age: 25,
  };
  
  function greet(person) {
    person.name = `Mr ${person.name}`;
  
    return `Welcome ${person.name}`;
  }
  
console.log(greet(person)); 
// Object is getting passed to function 
// return will be  - Welcome Mr john

// Assignment 3.5

// 3.5: Create higher order function named as transformer which
// take string and firstUpperCaseWord function as an arguments.
// firstUpperCaseWord is function which make first word UpperCase from a given String.

function transformer(str ,fun ){
    return fun(str)
}

function firstUpperCaseWord(str){
  li = str.split(" ")
  li[0] = li[0].toUpperCase()

  // len= firstword.length
  // console.log(len,str[len])
  return li.join(" ")
}

// function firstUpperCaseWord(str){
//   return str.toUpperCase()
// }
console.log(transformer("hello World tbdf df sdfas fa rfqw  we3" , firstUpperCaseWord))


// Assignment 3.6
// create function which will display Your name after every 5 seconds
let  yourName  =  "Sourav Tanwar";
setInterval(()=>{
  console.log(yourName)
},5000)



// Assignment 3.7
// Guess the Output And Explain Why?
let arrowFunction = (name = 'Coders') => {
  `Welcome ${name}`;
};
console.log(arrowFunction('Programmers'));

// Undefined -function is not returning anything

// Assignment 3.8
// Create a JavaScript Function to find the area of a
// triangle where lengths of the three of its sides are 5, 6, 7. : 
// Area = Square root of√s(s - a)(s - b)(s - c) 
// where s is half the perimeter, or (a + b + c)/2.


function area_of_triangle(a,b,c){
  let s =(a+b+c)/2
  let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
  return area
}
console.log(area_of_triangle(5, 6, 7));

// Assignment 3.9
// Create a JavaScript Function to capitalize the first letter of
// each word of a given string.


function capitalize(str){
  li = str.split(" ")
  for(let i=0 ; i<li.length;i++){
    word = li[i].split("")
    // console.log(word)
    word[0] = word[0].toUpperCase()
  
    li[i] = word.join("")
    // console.log(word)
  }
  return li.join(" ")
}
console.log(capitalize('we are the champions'))
li[i] = li[i].toUpperCase()

// output: 'We Are The Champions';