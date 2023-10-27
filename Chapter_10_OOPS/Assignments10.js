console.log("Hello Javascript")

// OOPS


// Assignment 10.1

// Use a constructor function to implement a Bike. A bike has a make and a speed property. The speed property is the current speed of the bike in km/h
// Implement an accelerate method that will increase the bike's speed by 50, and log the new speed to the console
// Implement a brake method that will decrease the bike's speed by 25, and log the new speed to the console
// Create 2 'Bike' objects and experiment with calling accelerate and brake multiple times on each of them

// Sample Data
// Data car 1: bike1 going at 120 km/h
// Data car 2: bike going at 95 km/h

let Bike = function(make,speed){
    this.make = make
    this.speed = speed
    this.accelerate = function(speed){
        console.log(`${this.make} speed is ${this.speed +=50} after acceleration`)
    }
    this.brake  = function(speed){
        console.log(`${this.make} speed is ${this.speed -=25} after acceleration`)
    }
}

let bike1 = new Bike("honda",120)
let bike2 = new Bike("hero",95)

console.log(bike1)
console.log(bike2)
bike1.accelerate()
bike1.brake()
bike2.brake()
bike2.accelerate()


// Assignment 10.2
// Re-create Question 1 But this time using ES6 class.

class Bike1 {
    constructor(make,speed){
        this.make = make
        this.speed = speed
    }
    accelerate(){
        console.log(`${this.make} speed is ${this.speed +=50} after acceleration`) 
    }
    brake(){
        console.log(`${this.make} speed is ${this.speed -=25} after acceleration`)
    }
}

let bike3  = new Bike1("Bajaj",120)
let bike4  = new Bike1("TVS",90)

bike3.accelerate()
bike4.accelerate()
bike3.brake()
bike4.brake()


// Assignment 10.3
// Guess the Output And Explain Why?
// function Person(name) {
//     this.name = name;
// }
  
// let me = new Person('John');
  
// console.log(me.__proto__ == Person.prototype);
// console.log(me.__proto__.__proto__ == Object.prototype);

// 1. me.__proto__ == Person.prototype:

// This comparison checks if the prototype of me is equal to the Person.prototype.
// The prototype of an instance created with new Person('John') is Person.prototype.
// So, this comparison evaluates to true.

// 2. me.__proto__.__proto__ == Object.prototype:
// This comparison checks if the prototype of the prototype of me (i.e., the prototype of Person.prototype) is equal to Object.prototype.
// In JavaScript, objects are linked via a prototype chain. Person.prototype is an object, and its prototype, by default, is Object.prototype.
// So, this comparison evaluates to true as well.
// Therefore, both comparisons in your code evaluate to true. This is because me is an instance of Person, and the prototype chain links it to Person.prototype, and Person.prototype is ultimately linked to Object.prototype.


// Assignment 10.4

// Create constructor function inside Car class with three properties color , model , company

// class Car {
//     constructor(color, model, company){
//         this.color =color
//         this.model = model
//         this.company = company
//     }
// }

// Assignment 10.5
// Identify all mistakes in the following class


// class  Car ={  It should not include =

//     constructor(){
    
    
    
//     }, It should not include ,
    
//     engineMethod  =  function(){
    
//     console.log("This is engine method of Car class");
    
//     }
    
//     }



// Assignment 10.6
// Guess the Output and explain Why? And if there is any error How we can remove that error?

// function Person(name, age) {
//     this.name = name;
  
//     this.age = age;
  
//     this.brainMethod = function () {
//       console.log('This is brain method of Person');
//     };
// }
  
// Person.heartMethod = function () {
//     console.log('This is heart method of Person');
// };
  
// let me = new Person('john', 34);
// me.brainMethod();
// // me.heartMethod();
// Person.heartMethod(); //fixed

// The code defines a constructor function Person and adds both instance methods and a static (class-level) method to it. It then creates an instance me of the Person class and attempts to call both instance and static methods on it. However, there is an error in the code that will result in a runtime error.

// Here's the error and how to fix it:

// me.brainMethod();

// This line attempts to call the brainMethod on the me instance. Since brainMethod is an instance method added to the prototype, this line will execute successfully without any errors. It will print: "This is brain method of Person."
// me.heartMethod();

// This line attempts to call the heartMethod on the me instance. However, there's an error here. The heartMethod is added as a static method directly to the Person function (class), and it's not available on the instance me. You can only call it on the class itself, not on instances of the class.
// To fix this error and call the heartMethod, you should call it on the class (constructor function) Person rather than on the instance me:


// Assignment 10.7
// Create a new class Dog (which will be child class) inherited from Animal class. 
// In Addition in Dog class add some additional properties like breedType\

class Animal {
    constructor(name,tail){
        this.name =name
        this.tail =tail
    }
}

class Dog extends Animal{
    constructor(name,tail,breedType){
        super(name,tail)
        this.breedType = breedType
    }
}
let  dog = new Dog("Bully",true,"Pitbull")
console.log(dog)

// Assignment 10.8
// Guess the Output And Explain Why?

// class Car {
//     constructor() {}
//   }
// let car = new Car();
// console.log(Car.prototype.isPrototypeOf(Car)); //False
// console.log(Car.prototype.isPrototypeOf(car)); //True

// In this code, you are working with a class Car and an instance car created from that class. You are using the isPrototypeOf method to check the prototype relationship between objects. Here's what happens:

// console.log(Car.prototype.isPrototypeOf(Car));

// This line checks if the Car class's prototype (Car.prototype) is the prototype of the Car class itself. In other words, it's checking if the class's prototype is in the prototype chain of the class.
// The result will be false. A class's prototype is not in the prototype chain of the class itself. The class is not an instance of itself, so this comparison is false.
// console.log(Car.prototype.isPrototypeOf(car));

// This line checks if the Car class's prototype (Car.prototype) is in the prototype chain of the car instance.
// The result will be true. When you create an instance with new Car(), the instance inherits the prototype of the class. In this case, Car.prototype is indeed in the prototype chain of car, so the comparison is true.
// The first console.log statement returns false because a class's prototype is not in its own prototype chain. The second console.log statement returns true because the instance car inherits the prototype of the class Car


// Practice Question
// Question 1: Guess the Output and Explain Why?
function carObject(name, model) {
    let car = Object.create(constructorObject);
  
    car.name = name;
  
    car.model = model;
  
    this.engineMethod = function () {
      console.log('This is engine method of car');
    };
  
    return car;
  }
  
  let constructorObject = {
    speak: function () {
      return 'This is my car';
    },
  };
  
  let myCar = carObject('Audi', 2023);
  
  console.log(myCar.__proto__);
  console.log(myCar);

//   In the code, you are defining a constructor function carObject to create car objects and using Object.create to set the prototype of the created car object to constructorObject. You also define a method engineMethod on the car object, and constructorObject has a speak method. Then, you create an instance of carObject named myCar and log its prototype using myCar.__proto__. Here's what happens:

// myCar is created using carObject('Audi', 2023). Inside the carObject function, an object car is created with its prototype set to constructorObject. Properties name and model are added to car, and the engineMethod method is assigned to the this object (which is car in this context).

// constructorObject is an object with a speak method.

// myCar is an instance of carObject, and its prototype is set to constructorObject.

// When you log myCar.__proto__, it will display the prototype of the myCar object, which is constructorObject. So, the output will be:


// Question 2: You have given an example of OOP Code. Your task is to explain the use of super
//  keyword in Dog class.

// And you have to change the code again after removing super keyword from the Dog class 
// (You have remove those lines/statements which are not necessary after removing super keyword)

class Animals {
    constructor(name, age) {
      this.name = name;
  
      this.age = age;
    }
  
    sing() {
      return `${this.name} can sing`;
    }
  
    dance() {
      return `${this.name} can dance`;
    }
}
  
class Dogs extends Animals {
constructor(name, age, whiskerColor) {
    super(name, age);
    this.whiskerColor = whiskerColor;
}

whiskers() {
    return `I have ${this.whiskerColor} whiskers`;
}
}
  
let newDog = new Dogs('Clara', 33, 'indigo');

console.log(newDog);

// Now, let's remove the super keyword from the Dogs class constructor and eliminate any code that is no longer necessary: javascript

// class Animals {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     sing() {
//       return `${this.name} can sing`;
//     }
  
//     dance() {
//       return `${this.name} can dance`;
//     }
//   }
  
//   class Dogs extends Animals {
//     constructor(name, age, whiskerColor) {
//       this.name = name; // No need for super
//       this.age = age;   // No need for super
//       this.whiskerColor = whiskerColor;
//     }
  
//     whiskers() {
//       return `I have ${this.whiskerColor} whiskers`;
//     }
//   }
  
//   let newDog = new Dogs('Clara', 33, 'indigo');
//   console.log(newDog);
  

// Question 3: What are the advantages of using getter and setter method in OOP?

// Using getter and setter methods in Object-Oriented Programming (OOP) provides several advantages, including encapsulation, data validation, and controlled access to object properties. Here are some of the key advantages:

// Encapsulation:

// Getters and setters allow you to encapsulate the internal state of an object. They provide a way to control how external code can access and modify the object's properties.
// This encapsulation helps hide the internal implementation details of an object, making it easier to maintain and evolve your code. It also reduces the risk of unintended side effects when modifying properties.
// Data Validation:

// With setters, you can implement data validation and ensure that the data stored in an object is valid and consistent. You can check the incoming data and apply constraints or business logic before setting a property.
// For example, you can ensure that a person's age is always a positive integer or that an email address follows a valid format.
// Controlled Access:

// Getters and setters provide a controlled interface to an object's properties. You can restrict access to read-only or write-only, and you can implement custom logic to allow or deny access.
// This control allows you to enforce security and business rules. For instance, you can prevent unauthorized modifications to sensitive properties.
// Computed Properties:

// Getters allow you to compute and return values dynamically based on the current state of the object. This is useful for generating derived or calculated properties.
// For example, you can create a get method to calculate the area of a rectangle based on its width and height.
// Debugging and Logging:

// Getters and setters provide a convenient place to add debugging and logging code. You can log property access or modification, making it easier to track and troubleshoot issues.
// Backward Compatibility:

// If you decide to change the implementation of a property in the future, you can do so without affecting the external code that uses the getter and setter methods. This maintains backward compatibility and minimizes code changes.
// Flexibility and Maintenance:

// Using getters and setters allows you to change the internal representation of a property without affecting the external interface. For example, you can start with a simple property but later convert it into a computed property without impacting the code using the property.
// In summary, getter and setter methods are essential tools in OOP for achieving data encapsulation, controlling access to properties, and ensuring data consistency and validation. They enhance the maintainability, security, and flexibility of your code, while also providing an organized and controlled way to work with object properties.


// Question 4: You have OOP code below. And there is single error in this code? Your task is to remove that error.
// Important Note: To solve this error You need to know about method chaining concept.
// class Car {
//     constructor(id) {
//       this.id = id;
//     }
  
//     setMake(make) {
//       this.make = make;
//     }
  
//     setModel(model) {
//       this.model = model;
//     }
  
//     setFuelType(fuelType) {
//       this.fuelType = fuelType;
//     }
  
//     getCarInfo() {
//       return {
//         id: this.id,
  
//         make: this.make,
  
//         model: this.model,
  
//         fuelType: this.fuelType,
//       };
//     }
//   }
  
//   console.log(
//     new Car(233)
  
//       .setMake('Honda')
  
//       .setModel('Civic')
  
//       .setFuelType('Petrol')
  
//       .getCarInfo()
//   );
// The code you provided has a small error in the chaining of method calls.
// You can't chain the setter methods as shown because they don't return the instance 
// of the Car class, making it impossible to chain subsequent method calls. To fix this
// error, you should return this in each setter method to allow method chaining. Here's
// the corrected code:


class Car {
    constructor(id) {
      this.id = id;
    }
  
    setMake(make) {
      this.make = make;
      return this; // Return 'this' to enable method chaining
    }
  
    setModel(model) {
      this.model = model;
      return this; // Return 'this' to enable method chaining
    }
  
    setFuelType(fuelType) {
      this.fuelType = fuelType;
      return this; // Return 'this' to enable method chaining
    }
  
    getCarInfo() {
      return {
        id: this.id,
        make: this.make,
        model: this.model,
        fuelType: this.fuelType,
      };
    }
  }
  
  console.log(
    new Car(233)
      .setMake('Honda')
      .setModel('Civic')
      .setFuelType('Petrol')
      .getCarInfo()
  );
  

//   Question 5: What is difference between ** proto** and prototype property of Object? Try with Example?

// In JavaScript, __proto__ and prototype are related but serve different purposes:

// __proto__:

// __proto__ is an internal property that allows an object to access its prototype, which is an object that defines the object's methods and properties.
// It's used for both setting and getting the prototype of an object.
// prototype:

// prototype is a property found on constructor functions in JavaScript. It defines the prototype object that will be used as the prototype for objects created with that constructor function when you use the new keyword.
// It's not a property of individual objects but rather a property of constructor functions.
// Here's an example to illustrate the difference:


// Constructor function
// function Person(name) {
//     this.name = name;
//   }
  
//   // Adding a method to the prototype of the constructor
//   Person.prototype.greet = function () {
//     return `Hello, my name is ${this.name}.`;
//   }
  
//   // Creating an instance of the Person object
//   const person1 = new Person('Alice');
  
//   // Accessing the prototype of the instance using __proto__
//   console.log(person1.__proto__ === Person.prototype); // true
  
//   // Using the method from the prototype
//   console.log(person1.greet()); // "Hello, my name is Alice."
  
//   // Note that you can also access the prototype of the constructor
//   console.log(Person.prototype); // { greet: [Function] }


//   In this example:

// __proto__ is used to access the prototype of the person1 object, and it's compared to Person.prototype, showing that they are the same.
// prototype is used to define the methods shared by all instances of Person. It's not a property of individual instances but of the constructor function.
// Instances created with new Person() inherit the prototype of the constructor function, which is why they can access the greet method defined on the prototype.
// In modern JavaScript, it's generally recommended to use the prototype property to define shared methods for constructor functions and avoid direct manipulation of the __proto__ property, which is considered less standardized and less efficient.



// Question 6: create class of Person with properties name, age.

// Your main task is to add static method in that class of your choice ( e.g brainMethod)

// class Person {
//     constructor(name, age) {
//       this.name = name;
  
//       this.age = age;
//     }
//   }
  
//   let me = new Person('abhishek', 25);
  
//   console.log(me);

// To add a static method to the Person class, you can define the method using the static keyword within the class. Here's how you can add a static method called brainMethod to the Person class:
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    static brainMethod() {
      console.log("This is a static method called 'brainMethod'.");
    }
  }
  
  let me = new Person('Abhishek', 25);
  
  console.log(me);
  
  // Call the static method
  Person.brainMethod();
  
  