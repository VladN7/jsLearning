/*
 * JavaScript Operators Lesson
 * File: operators.js
 * Description: A comprehensive guide to understanding various operators in JavaScript.
 */

// Helper function to display section headers
function sectionHeader(title) {
  console.log(`\n===== ${title} =====`);
}

// 1. Arithmetic Operators
sectionHeader('1. Arithmetic Operators');
console.log('10 + 5:', 10 + 5);
console.log('10 - 5:', 10 - 5);
console.log('10 * 5:', 10 * 5);
console.log('10 / 5:', 10 / 5);
console.log('10 % 3:', 10 % 3);
console.log('10 ** 3:', 10 ** 3);

// 2. Assignment Operators
sectionHeader('2. Assignment Operators');
let x = 5;
console.log('x = 5:', x);
x += 3;
console.log('x += 3:', x);
x -= 2;
console.log('x -= 2:', x);

// 3. Comparison Operators
sectionHeader('3. Comparison Operators');
console.log('5 == "5":', 5 == '5');
console.log('5 === "5":', 5 === '5');
console.log('5 != "5":', 5 != '5');
console.log('5 !== "5":', 5 !== '5');
console.log('5 > 3:', 5 > 3);
console.log('5 < 3:', 5 < 3);
console.log('5 >= 5:', 5 >= 5);
console.log('5 <= 5:', 5 <= 5);

// 4. Logical Operators
sectionHeader('4. Logical Operators');
console.log('true && false:', true && false);
console.log('true || false:', true || false);
console.log('!true:', !true);

// 5. String Operators
sectionHeader('5. String Operators');
console.log('"Hello " + "World!":', 'Hello ' + 'World!');

// 6. Ternary Operator (Conditional)
sectionHeader('6. Ternary Operator (Conditional)');
const age = 20;
const isAdult = age >= 18 ? 'Yes' : 'No';
console.log(`Is 20 years old an adult? ${isAdult}`);

// 7. Type Operators
sectionHeader('7. Type Operators');
console.log('typeof "Hello":', typeof 'Hello');

// 8. Spread and Rest Operators
sectionHeader('8. Spread and Rest Operators');
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log('Spread in Arrays:', arr2);
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log('Spread in Objects:', obj2);

function showArgs(...args) {
  console.log('Rest in Function Parameters:', args);
}
showArgs(1, 2, 3, 4);

// 9. Bitwise Operators
sectionHeader('9. Bitwise Operators');
console.log('5 & 3 (AND):', 5 & 3);
console.log('5 | 3 (OR):', 5 | 3);
console.log('5 ^ 3 (XOR):', 5 ^ 3);
console.log('~5 (NOT):', ~5);
console.log('5 << 1 (Left Shift):', 5 << 1);
console.log('5 >> 1 (Right Shift):', 5 >> 1);

// 10. Relational Operators
sectionHeader('10. Relational Operators');
console.log('"apple" < "banana":', 'apple' < 'banana'); // true (because in Unicode, "apple" is less than "banana")

// 11. Other Operators
sectionHeader('11. Other Operators');
console.log('Property "a" in obj1:', 'a' in obj1);
console.log('obj1 instance of Object:', obj1 instanceof Object);
let a = 1, b = 2, c = 3;
console.log('Comma Operator:', (a, b, c)); // returns the value of c

// 12. Nullish Coalescing Operator (??)
sectionHeader('12. Nullish Coalescing Operator (??)');
const value1 = null;
const value2 = value1 ?? 'Default Value';
console.log('Nullish Coalescing:', value2);

