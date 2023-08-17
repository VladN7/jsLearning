/*
 * JavaScript Operators Lesson
 * File: operators.js
 * Description: A comprehensive guide to understanding various operators in JavaScript.
 */

// 1. Arithmetic Operators
console.log('1. Arithmetic Operators');
console.log(10 + 5);    // Addition
console.log(10 - 5);    // Subtraction
console.log(10 * 5);    // Multiplication
console.log(10 / 5);    // Division
console.log(10 % 3);    // Modulus (Remainder)
console.log(10 ** 3);   // Exponentiation
console.log('\n');

// 2. Assignment Operators
console.log('2. Assignment Operators');
let x = 5;              // Assignment
x += 3;                 // Addition assignment (x = x + 3)
console.log(x);
x -= 2;                 // Subtraction assignment (x = x - 2)
console.log(x);
// ... and similarly for *=, /=, %=, **=
console.log('\n');

// 3. Comparison Operators
console.log('3. Comparison Operators');
console.log(5 == '5');  // Equal to (loose equality)
console.log(5 === '5'); // Equal value and equal type (strict equality)
console.log(5 != '5');  // Not equal
console.log(5 !== '5'); // Not equal value or not equal type
console.log(5 > 3);     // Greater than
console.log(5 < 3);     // Less than
console.log(5 >= 5);    // Greater than or equal to
console.log(5 <= 5);    // Less than or equal to
console.log('\n');

// 4. Logical Operators
console.log('4. Logical Operators');
console.log(true && false);  // Logical AND
console.log(true || false);  // Logical OR
console.log(!true);          // Logical NOT
console.log('\n');

// 5. String Operators
console.log('5. String Operators');
console.log('Hello ' + 'World!'); // Concatenation
console.log('\n');

// 6. Ternary Operator (Conditional)
console.log('6. Ternary Operator (Conditional)');
const age = 20;
const isAdult = age >= 18 ? 'Yes' : 'No'; // Ternary/Conditional Operator
console.log(`Is 20 years old an adult? ${isAdult}`);
console.log('\n');

// 7. Type Operators
console.log('7. Type Operators');
console.log(typeof 'Hello');  // Returns the type of a variable, object, function, or expression
console.log('\n');

