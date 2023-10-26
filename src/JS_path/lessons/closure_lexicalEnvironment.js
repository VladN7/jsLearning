import {sectionLog} from '../utils.js';

'use strict';

let number = 5;
function logNumber() {
  return number;
}

number = 10;

function createCounter() {
  let counter = 0;
  const myFunction = function () {
    counter = counter + 1;
    return counter;
  };
  return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

let num;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    num = 3;
  }
}

sectionLog('Closure and Lexical Environment', {
  'Explanation': 'A function looks for a variable in its own scope, then in the parent scope, and finally in the global scope.\n ' +'If it doesn\'t find it, it will create it in the global scope. This is called lexical environment, which is created when the function is created and is closed after the function is executed.',
  'Value of number in logNumber': logNumber(),
  'First increment': c1,
  'Second increment': c2,
  'Third increment': c3,
  'Value of num in nested loops': num
});
