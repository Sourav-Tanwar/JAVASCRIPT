console.log("Hello Javascript")

// Async JS


// Assignment 11.1
// Guess the Output And Explain Why?

async function greeting() {
  let myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve('I love Programming !!');
    }, 2000);
  });

  document.getElementById('heading').innerHTML = await myPromise;
}

greeting();

//Output - I love Programming !! in H2 after  2 sec
// Because myPromise return that text after 2 sec


// Assignment 11.2
// Find the Logical Error in below code. And How can 
// we solve them with callback function approach?

// const movies = [{ title: `Movie 1` }, { title: `Movie 2` }];

// function getMovies() {
//   setTimeout(() => {
//     movies.forEach((movie, index) => {
//       console.log(movie.title);
//     });
    
//   }, 1000);
// }

// function createMovies(movie) {
//   setTimeout(() => {
//     movies.push(movie);
//   }, 2000);
// }

// getMovies();

// createMovies({ title: `Movie 3` });

// Fixed code

// const movies = [{ title: `Movie 1` }, { title: `Movie 2` }];

// function getMovies(callback) {
//   setTimeout(() => {
//     movies.forEach((movie, index) => {
//       console.log(movie.title);
//     });
//     if (callback) {
//       callback();
//     }
//   }, 1000);
// }

// function createMovies(movie, callback) {
//   setTimeout(() => {
//     movies.push(movie);
//     if (callback) {
//       callback();
//     }
//   }, 2000);
// }

// getMovies(() => {
//   createMovies({ title: `Movie 3` }, () => {
//     // Additional actions after creating the movie
//     console.log("Movie 3 has been created.");
//   });
// });


// Assignment 11.3
// What are the three possible State of any promise?

// Pending: The initial state of a promise. When a promise is created, it
// is in a pending state, meaning that the asynchronous operation represented
// by the promise has not yet been completed. Promises start in this state and transition to either the "fulfilled" or "rejected" 
// state based on the outcome of the asynchronous operation.

// Fulfilled (Resolved): A promise enters the fulfilled state when the asynchronous operation it
// represents has been successfully completed. In this state, the promise has a resolved value, and any attached .then() handlers are executed with the resolved value as their argument.
// This signifies that the promise's task was successful.

// Rejected: A promise enters the rejected state when the asynchronous 
// operation it represents encounters an error or fails for some reason. In this state, the promise has a reason for rejection
// (an error or an exception), and any attached .catch() or .then() handlers with a rejection callback are executed with the rejection reason as their argument. This signifies that the promise's 
// task encountered an issue or failed.


// Assignment 11.4
// Solve Question 2 again But this time with the help of promise
// const movies = [{ title: `Movie 1` }, { title: `Movie 2` }];

// function getMovies() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       movies.forEach((movie, index) => {
//         console.log(movie.title);
//       });
//       resolve();
//     }, 1000);
//   });
// }

// function createMovies(movie) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       movies.push(movie);
//       resolve();
//     }, 2000);
//   });
// }

// async function main() {
//   await getMovies();
//   await createMovies({ title: `Movie 3` });
//   console.log('Movie 3 has been created.');
// }

// main();


// Assignment 11.5
// Now re-factor Question 2 with the help of async-await keyword?

const movies = [{ title: `Movie 1` }, { title: `Movie 2` }];

function getMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      movies.forEach((movie, index) => {
        console.log(movie.title);
      });
      resolve();
    }, 1000);
  });
}

function createMovies(movie) {
  return new Promise((resolve) => {
    setTimeout(() => {
      movies.push(movie);
      resolve();
    }, 2000);
  });
}

async function main() {
  await getMovies();
  await createMovies({ title: `Movie 3` });
  console.log('Movie 3 has been created.');
}

main();


// Assignment 11.6
// Status code starting with 404 represent which type of message/error?

// HTTP status code 404 represents a "Not Found" error. It indicates that 
// the requested resource or web page could not be found on the server. 
// This status code is commonly used to inform the client (typically a web 
// browser) that the requested URL does not exist or the server cannot 
// locate the resource. It's a client-side error and is often seen when 
// a user tries to access a web page or resource that is not available.