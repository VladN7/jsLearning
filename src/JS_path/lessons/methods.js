/*
 * JavaScript Methods Lesson
 * File: methods.js
 * Description: A comprehensive guide to understanding methods in JavaScript.
 */

// Helper function to display section headers
function sectionHeader(title) {
  console.log(`\n===== ${title} =====`);
}

// 1. String Methods
sectionHeader('1. String Methods');

function stringMethods() {
  const str = 'Hello!';
  console.log(str.toUpperCase());
  console.log(str.toLowerCase());
  console.log(str.slice(4));
  console.log(str.slice(0, 2));
  console.log(str.substring(0, 2));
  console.log(str.substr(1, 3));
  console.log(str.indexOf('l'));
  console.log(str.replace('!', '?'));
  console.log(str.concat(' World'));
  console.log(str.trim());
}
stringMethods();

// 2. Number Methods
sectionHeader('2. Number Methods');

function numberMethods() {
  const num = 42.23;
  const test = '137.2px';
  console.log(Math.round(num));
  console.log(parseInt(test));
  console.log(parseFloat(test));
  console.log(Math.floor(num));
  console.log(Math.ceil(num));
  console.log(Math.abs(-42));
  console.log(Math.pow(2, 3));
}
numberMethods();

// 3. Array Methods
sectionHeader('3. Array Methods');

function arrayMethods() {
  const arr = [1, 2, 3, 4, 5];
  console.log(arr.push(6));
  console.log(arr.pop());
  console.log(arr.shift());
  console.log(arr.unshift(0));
  console.log(arr.splice(2, 0, 'a', 'b'));
  console.log(arr.join('-'));
  console.log(arr.slice(2, 4));
  console.log(arr.reverse());
  console.log(arr.map(x => x * 2));
  console.log(arr.filter(x => x > 2));
}
arrayMethods();

// 4. Object Methods
sectionHeader('4. Object Methods');

function objectMethods() {
  const obj = { name: 'Alice', age: 25 };
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
  console.log(Object.entries(obj));
  console.log(Object.assign({}, obj, { gender: 'female' }));
}
objectMethods();

// 5. Date Methods
sectionHeader('5. Date Methods');

function dateMethods() {
  const date = new Date();
  console.log(date.getFullYear());
  console.log(date.getMonth());
  console.log(date.getDate());
  console.log(date.getDay());
  console.log(date.getTime());
}
dateMethods();

// Tips & Notes
sectionHeader('Tips & Notes');
console.log(`- Understand the difference between destructive and non-destructive methods.
- Be familiar with method chaining.
- Use Array and Object methods to avoid manual loops where possible.
- Date methods are crucial for handling time-sensitive logic.`);
