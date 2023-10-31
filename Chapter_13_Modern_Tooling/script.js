// console.log("Hello Javascript")

// Modern Tooling



// Assignment 13.1
// You have given scenario. You are in script.js And in same directory there is another file products.js. 
// In products.js there are two methods called createProduct and deleteProduct

// write an import and export statement properly in order to import these two methods 
// from products.js file into the script.js

// console.log("importing ")
// import {createProduct,deleteProduct} from  './product.js';

// createProduct()
// deleteProduct()



// Assignment 13.2
// Question 2 Now export only one method createProduct using default export statement?


// import createProduct from  './product.js';
// createProduct()



// Assignment 13.3
// In import statement how can we customize/change the name of function we are importing?


console.log("importing ")
import {createProduct as CP,deleteProduct as DP} from  './product.js';

CP()
DP()

