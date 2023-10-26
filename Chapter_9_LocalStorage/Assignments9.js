console.log("Hello Javascript")

// Local Storage


// Assignment 9.1
// Create two variables myHobby , age . Now set their value in local 
// storage (according to your hobby and age).
// After setting also get value from local storage and display their values in console.

// let myHobby = "Cricket"
// let age = 24

localStorage.setItem("myHobby","Cricket")
localStorage.setItem("age",24)


console.log(localStorage.getItem("myHobby"))
console.log(localStorage.getItem("age"))