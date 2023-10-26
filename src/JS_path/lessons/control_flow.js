import {sectionHeader} from '../utils.js';

/*
 * JavaScript Control Flow Lesson
 * File: control_flow.js
 */

// 1. Loop Control with Break
sectionHeader('1. Loop Control with Break');

for (let j1 = 20; j1 >= 13; j1--) {
  if (j1 === 13) break;
  console.log(j1);
}

// 2. Loop Control with Continue
sectionHeader('2. Loop Control with Continue');

for (let k = 2; k <= 10; k++) {
  if (k % 2 !== 0) continue;
  console.log(k);
}

// 3. Conditional Looping with While
sectionHeader('3. Conditional Looping with While');

let num = 2;
while (num <= 10) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}
