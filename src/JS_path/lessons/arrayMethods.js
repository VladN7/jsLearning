import {sectionHeader} from '../utils.js';

// Array Methods
sectionHeader('Array Methods');

// Array Manipulation Methods
sectionHeader('1. Array Manipulation Methods');
const arr = [1, 2, 3, 4, 5];
console.log(arr.push(6));
console.log(arr);
console.log(arr.pop());

// For loop Iteration
sectionHeader('2. For loop Iteration');
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// For-of loop Iteration
sectionHeader('3. For-of loop Iteration');
for (let value of arr) {
  console.log(value);
}

// Array Length
sectionHeader('4. Array Length');
sectionHeader('4.1. Length is a property, not a method');
console.log(arr.length);

// Array forEach Method
sectionHeader('5. Array forEach Method');
arr.forEach(function (item, i, arr) {
  console.log(`index ${i}: item ${item} inside array ${arr}`);
});

// Array Filter Method
sectionHeader('6. Array Filter Method');
console.log(arr.filter(x => x > 2));

// String to Array and Sorting
sectionHeader('7. String to Array and Sorting');
const str = 'banana, apple, orange, kiwi';
const products = str.split(', ');
products.sort();
console.log(products.join('; '));
console.log(products);

// Custom Sort for Numbers
sectionHeader('8. Custom Sort for Numbers');
const arr2 = [2, 12, 34, 8, 59];
arr2.sort(compareNum);
console.log(arr2);
function compareNum(a, b) {
  return a - b;
}


