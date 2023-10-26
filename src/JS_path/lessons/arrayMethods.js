import {sectionHeader, sectionLog} from '../utils.js';

sectionHeader('Array Methods');

sectionHeader('1. Array Manipulation Methods');
const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice();
newArr[2] = 'a';
sectionLog('Array Operations', {
  'Push operation': arr.push(6),
  'Pop operation': arr.pop(),
  'Shift operation': arr.shift(),
  'Unshift operation': arr.unshift(0),
  'New Array': newArr,
  'Splice operation': arr.splice(2, 0, 'a', 'b'),
  'Join operation': arr.join('-'),
  'Slice operation': arr.slice(2, 4),
  'Reverse operation': arr.reverse(),
  'Map operation': arr.map(x => x * 2),
  'Filter operation': arr.filter(x => x > 2)
});

sectionHeader('2. For loop Iteration');
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

sectionHeader('3. For-of loop Iteration');
for (let value of arr) {
  console.log(value);
}

sectionHeader('4. Array Length');

console.log(arr.length);

sectionHeader('5. Array forEach Method');
arr.forEach(function (item, i, arr) {
  console.log(`index ${i}: item ${item} inside array ${arr}`);
});

sectionHeader('6. Array Filter Method');
console.log(arr.filter(x => x > 2));

sectionHeader('7. String to Array and Sorting');
const str = 'banana, apple, orange, kiwi';
const products = str.split(', ');
products.sort();
console.log(products.join('; '));
console.log(products);

sectionHeader('8. Custom Sort for Numbers');
const arr2 = [2, 12, 34, 8, 59];
arr2.sort(compareNum);
console.log(arr2);
function compareNum(a, b) {
  return a - b;
}

sectionHeader('9. Reducer Method');
const arr3 = [1, 2, 3, 4, 5];
function arrReduce(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}
console.log(arrReduce(arr3));
