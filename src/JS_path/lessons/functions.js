/*
 * JavaScript Functions Lesson
 * File: functions.js
 * Description: A comprehensive guide to understanding functions in JavaScript.
 */

// Helper function to display section headers
function sectionHeader(title) {
  console.log(`\n===== ${title} =====`);
}

// 1. Function Declaration
sectionHeader('1. Function Declaration');
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet('Alice');

// 2. Function Expressions
sectionHeader('2. Function Expressions');
const sayHi = function(name) {
  console.log(`Hi, ${name}!`);
};
sayHi('Bob');

// 3. Arrow Functions
sectionHeader('3. Arrow Functions');
const add = (a, b) => a + b;
console.log(`2 + 3 = ${add(2, 3)}`);

// 4. Function Parameters & Return
sectionHeader('4. Function Parameters & Return');
function multiply(a, b) {
  return a * b;
}
console.log(`4 * 5 = ${multiply(4, 5)}`);

// 5. Callback Functions !!!IMPORTANT!!!
sectionHeader('5. Callback Functions');
function learnJS(lang, callback) {
  console.log(`I am learning ${lang}`);
  callback();
}
function done() {
  console.log('Lesson finished');
}
learnJS('JavaScript', done);

// 6. Closure
sectionHeader('6. Closure');
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    console.log(`Current Counter: ${counter}`);
  }
  return incrementCounter;
}
const myNewFunction = outer();
myNewFunction();
myNewFunction();

// 7. Immediately Invoked Function Expression (IIFE)
sectionHeader('7. IIFE');
(function() {
  console.log('This is an IIFE!');
})();

// Tips & Notes
sectionHeader('Tips & Notes');
console.log(`- Always name your functions for better readability and debugging.
- Keep functions small and focused on a single task.
- Adhere to the DRY principle: Don't Repeat Yourself.
- Remember, functions are objects in JavaScript.
- Nested functions are known as 'closure'.`);
