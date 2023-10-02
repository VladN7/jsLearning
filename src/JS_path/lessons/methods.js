import {sectionHeader, sectionLog} from '../utils.js';

/*
 * JavaScript Methods Lesson
 * File: methods.js
 * Description: A comprehensive guide to understanding methods in JavaScript.
 */

function stringMethods() {
  const str = 'Hello!';
  sectionLog('String Operations', {
    'To Upper Case': str.toUpperCase(),
    'To Lower Case': str.toLowerCase(),
    'Slice from index 4': str.slice(4),
    'Slice from index 0 to 2': str.slice(0, 2),
    'Substring from index 0 to 2': str.substring(0, 2),
    'Substr from index 1 with length 3': str.substr(1, 3),
    'Index of "l"': str.indexOf('l'),
    'Replace "!" with "?"': str.replace('!', '?'),
    'Concat with " World"': str.concat(' World'),
    'Trim': str.trim()
  });
}
stringMethods();

function numberMethods() {
  const num = 42.23;
  const test = '137.2px';

  sectionLog('Number Operations', {
    'Round': Math.round(num),
    'Parse Int': parseInt(test),
    'Parse Float': parseFloat(test),
    'Floor': Math.floor(num),
    'Ceil': Math.ceil(num),
    'Absolute': Math.abs(-42),
    'Power': Math.pow(2, 3)
  });
}
numberMethods();

function arrayMethods() {
  const arr = [1, 2, 3, 4, 5];
  const arr2 = [6, 7, 8, 9, 10];

  sectionLog('Array Operations', {
    'Push operation': arr.push(6),
    'Pop operation': arr.pop(),
    'Shift operation': arr.shift(),
    'Unshift operation': arr.unshift(0),
    'Splice operation': arr.splice(2, 0, 'a', 'b'),
    'Join operation': arr.join('-'),
    'Slice operation': arr.slice(2, 4),
    'Reverse operation': arr.reverse(),
    'Map operation': arr.map(x => x * 2),
    'Filter operation': arr.filter(x => x > 2),
    'Reduce operation': arr.reduce((accumulator, currentValue) => accumulator + currentValue),
    'Reduce with initial value': arr.reduce((accumulator, currentValue) => accumulator + currentValue, 3),
    'Concat operation': arr.concat(arr2)
  });
}
arrayMethods();