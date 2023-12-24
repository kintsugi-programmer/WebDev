// To run js file > open terminal > node file_name.js

// Single Line Comment

/*
Multi
-
Line
Comment
*/

/*
1. **Basic JavaScript Concepts:**
   - Variables and Data Types
   - Operators
   - Control Flow (if statements, loops)
   - Functions
   - Objects and Arrays
   - DOM Manipulation (in 1a.html (which contains html with script ;0 ))
   - Ternary operators
*/

// variable
// Declare a variable
let message = "Hello World!";
let name = "Siddhant Bali Computer Science Sorcerer "

// Datatypes
let num = 1010; // Number
let text = "Some text"; // String
let isTrue = true; // Boolean
let data; // Undefined
let myArray = [1, 2, 3]; // Array
let myObject = { key: "value" }; // Object
let persona = { name: "Bob", age: 30 }; // Object

// Print the variable
console.log(message);

/*

;

In JavaScript, the semicolon (;) is used to terminate statements. 
While JavaScript does have automatic semicolon insertion (ASI), 
it's a good practice to include semicolons explicitly to avoid potential issues, 
especially in larger codebases.

It's important to note that in modern JavaScript, 
there are contexts (such as at the end of a block) 
where a semicolon is not strictly required. However, 
including them is a recommended practice to avoid potential issues.

*/

// Operators
let x = 10;
let y = 5;
let sum = x + y; // Addition
let difference = x - y; // Subtraction
let product = x * y; // Multiplication
let quotient = x / y; // Division
let isEqual = x === y; // Strict equality === ,not ==
let isNotEqual = x !== y; // Strict inequality
let isTrue1 = true;
let isFalse = false;
let andResult = isTrue && isFalse; // Logical AND
let orResult = isTrue || isFalse; // Logical OR
let notResult = !isTrue; // Logical NOT

// Printing results
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Is Equal:", isEqual);
console.log("Is Not Equal:", isNotEqual);
console.log("Logical AND Result:", andResult);
console.log("Logical OR Result:", orResult);
console.log("Logical NOT Result:", notResult);


// Function declaration
function greet(usrname){
    console.log("Hello "+usrname+" in this tutorial program ");
    console.log(";)");
}

function test(){
    console.log("test done ;)");
}

// Function call
greet(name);

// Arrow Functions (ES6)
let Multiplication = (a,b) => a*b;

// Conditional Statements
// if,else,else if
if (num > 0) {
  console.log("Positive number");
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}

// for loop
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element) 
}

// While loop
let counter = 0;
while (counter<=5) {
    console.log(counter);
    counter++;
    
}

// Object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };

let car= {model: "Swift Dezire",company:"Maruti Suzuki",desc:function(){return this.model+" by "+this.company;}};
  
// Accessing object properties and calling a method
console.log(person.firstName); // John
console.log(person.fullName()); // John Doe

console.log(car);
/*
{
  model: 'Swift Dezire',
  company: 'Maruti Suzuki',
  desc: [Function: desc]
}


*/
console.log(car.model);
console.log(car.company);
console.log(car.desc());
  

// Array
let fruits = ["apple", "banana", "orange"];

// Iterating through an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Array methods
fruits.push("grape"); // Add an element to the end
fruits.pop(); // Remove the last element
fruits.unshift("kiwi"); // Add to the beginning
fruits.shift(); // Remove from the beginning
console.log(fruits); // ["apple", "banana", "orange"]

// Using forEach to iterate through each element in the 'fruits' array and print it.
fruits.forEach(function (fruit) {
  console.log("Current Fruit:", fruit);
});

// Using filter to create a new array ('filteredFruits') by excluding the "orange" fruit.
let filteredFruits = fruits.filter(function (fruit) {
  // The filter callback returns true for elements that should be included in the filtered array.
  // In this case, it excludes "orange" from the new array.
  return fruit !== "orange";
});

// Displaying the filtered array of fruits after excluding "orange".
console.log("Filtered Fruits (excluding 'orange'):", filteredFruits);

// Ternary operators
// condition ? expression_if_true : expression_if_false;
let age = 20;
let message2 = (age >= 18) ? 'You are an adult' : 'You are a minor';

console.log(message2);
// Output: 'You are an adult' (since age is 20, which is greater than or equal to 18)

let tier = 1;
let college = (tier=1)?'Premium College': (tier=2)?'Decent College':'Bekar College';
console.log(college);

let num1 = 10;

// Check if num1 is greater than 0
let result = (num1 > 0) 
  ? 'Positive' // If true, set result to 'Positive'
  : (num1 < 0) 
    ? 'Negative' // If false, check if num1 is less than 0. If true, set result to 'Negative'
    : 'Zero'; // If false, set result to 'Zero'

console.log(result);
// Output: 'Positive' (since num1 is 10, which is greater than 0)

const Component = () => {return age>10?<div>Bhati</div>:<div>Bali</div>;};
