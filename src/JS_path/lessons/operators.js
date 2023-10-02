import { sectionHeader, sectionLog } from '../utils.js';

/*
 * JavaScript Operators Lesson
 * File: operators.js
 * Description: A comprehensive guide to understanding various operators in JavaScript.
 */

sectionLog('Arithmetic Operations', {
  '10 + 5': 10 + 5,
  '10 - 5': 10 - 5,
  '10 * 5': 10 * 5,
  '10 / 5': 10 / 5,
  '10 % 3': 10 % 3,
  '10 ** 3': 10 ** 3
});

let x = 5;
sectionLog('Assignment Operations', {
  'x = 5': x,
  'x += 3': x += 3,
  'x -= 2': x -= 2
});

sectionLog('Comparison Operations', {
  '5 == "5"': 5 == '5',
  '5 === "5"': 5 === '5',
  '5 != "5"': 5 != '5',
  '5 !== "5"': 5 !== '5',
  '5 > 3': 5 > 3,
  '5 < 3': 5 < 3,
  '5 >= 5': 5 >= 5,
  '5 <= 5': 5 <= 5
});

sectionLog('Logical Operations', {
  'true && false': true && false,
  'true || false': true || false,
  '!true': !true
});

sectionLog('String Operations', {
  '"Hello " + "World!"': 'Hello ' + 'World!'
});

const age = 20;
const isAdult = age >= 18 ? 'Yes' : 'No';
sectionLog('Ternary Operations', {
  'Is 20 years old an adult?': isAdult
});

sectionLog('Type Operations', {
  'typeof "Hello"': typeof 'Hello'
});

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
sectionLog('Spread and Rest Operations', {
  'Spread in Arrays': arr2,
  'Spread in Objects': obj2
});

function showArgs(...args) {
  console.log('Rest in Function Parameters:', args);
}
showArgs(1, 2, 3, 4);

sectionLog('Bitwise Operations', {
  '5 & 3 (AND)': 5 & 3,
  '5 | 3 (OR)': 5 | 3,
  '5 ^ 3 (XOR)': 5 ^ 3,
  '~5 (NOT)': ~5,
  '5 << 1 (Left Shift)': 5 << 1,
  '5 >> 1 (Right Shift)': 5 >> 1
});

sectionLog('Relational Operations', {
  '"apple" < "banana"': 'apple' < 'banana'
});

let a = 1, b = 2, c = 3;
sectionLog('Other Operations', {
  'Property "a" in obj1': 'a' in obj1,
  'obj1 instance of Object': obj1 instanceof Object,
  'Comma Operator': (a, b, c)
});

const value1 = null;
const value2 = value1 ?? 'Default Value';
sectionLog('Nullish Coalescing', {
  'Nullish Coalescing': value2
});
