console.log("Hello Javascript")

// OBJECTS


// Assignment 4.1
// Guess the Output And Explain ?
console.log(Math.round(Math.random() * 10));
// Output  - Random value between 0 and 10


// Assignment 4.2
// Create an object called country for a country of your choice, containing properties name , capital, language, population and neighbors

// Increase the country population by two million using dot notation.
// Decrease the country population by one million using bracket notation.
// Make language value in Uppercase.

let country ={
  name :"india",
  capital: "Delhi",
  language: " Hindi",
  population :10,
  neighbors : 6
}

// Increase the country population by two million using dot notation.
country.population +=2;
console.log(country.population) 

// Decrease the country population by one million using bracket notation.
country["population"] -=1;
console.log(country.population) 

// Make language value in Uppercase.
country.language = country.language.toUpperCase()
console.log(country)



// Assignment 4.3
// Guess the Output and explain Why?

let car = {
  color: 'Blue',
  model: 2021,
  company: 'Toyota',
};

let carColor = 'Blue';

console.log(car[carColor]);

console.log(car.carColor);
// Output- Undefined because Car Object does not have carColor in it.


// Assignment 4.4
// Create a method describeCar inside car object in which you have to print 
// like this in console using template literals

// Company of my car is ** . It color is And Model of my car is __**

let Car1 = {
  color: 'Blue',
  model: 2021,
  company: 'Toyota',
  describeCar  : function(){
    console.log(`Company of my car is ${this.company} . It color is And Model of my car is ${this.model}`)
  }
}

Car1.describeCar()

// Assignment 4.5
// Generate random numbers between 0 and 10 using trunc method of MATH object

function getRandomNumbers(){
 return Math.trunc(Math.random()*10)
}
console.log(getRandomNumbers())

// Output -random integer between 0 and 9.

// Assignment 4.6
// Guess the Output and Explain Why?

let  arr  = [1,2,3,4];
arr.forEach(elem  =>{
  if(elem  ==  1){
    // continue;
  }

console.log(elem);

})
// continue is not allowed within a forEach loop, and it will lead to a syntax error.
// The continue statement is typically used within loops like for or while to skip 
// the current iteration and move on to the next one,
//  but it doesn't work in the context of a forEach callback function.

// Assignment 4.7
// Guess the Output and Explain Why?
let airplane = {
  flightName: 'fly india',

  atacode: 'FI',

  ratings: 4.9,

  book(passenger, flightNum) {
    console.log(
      `${passenger} Booked flight in ${this.flightName} with flight Number ${this.atacode}${flightNum}`
    );
  },
};

let bookMethod = airplane.book;

bookMethod('john', 8754);

// john Booked flight in undefined with flight Number undefined8754

// When you call bookMethod('john', 8754);, you're essentially calling the book method outside the context of the airplane object. In this context, this does not refer to the airplane object, so this.flightName and this.atacode will be undefined.
// As a result, when the console.log statement is executed within bookMethod, it will attempt to access properties of an undefined object, which will lead to an error. Specifically, it will generate a "Cannot read property 'flightName' of undefined" error.


// Assignment 4.8
// Guess the Output and Explain Why?
let arr1 = [1, 2, 3, 4];

for (let elem in arr1) {
  console.log(elem);
}
// Output
// 0
// 1
// 2
// 3

// In a for...in loop, elem represents the index or key, not the actual elements of the array. Here's what the output will look like for the given code:



// Assignment 4.9
// You have to create a Shopping_Cart array with following features :

// addItem(itemName) : this function should add string itemName to cart

// removeItem(itemName): this function should remove any item which matches itemName. Hint : search for index of itemName and then remove it

// cartSize() : returns size of cart in terms of number of cart Items.


let Shopping_Cart ={
  cart: ["Mango","Mouse","key"],
  addItem :function(itemName){
    this.cart.push(itemName)
  },
  removeItem :function(itemName){
    const index = this.cart.indexOf(itemName);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  },
  cartSize :function(){
    return this.cart.length
  }
}

console.log(Shopping_Cart.cart)
Shopping_Cart.addItem("Apple")
console.log(Shopping_Cart.cart)
console.log("DFSF DFSD ")
Shopping_Cart.removeItem("key")
console.log(Shopping_Cart.cart)
console.log(Shopping_Cart.cartSize())


