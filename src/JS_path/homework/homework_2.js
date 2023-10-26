/*
 * JavaScript Homework 2
 * Description: Control flow exercises using loops and conditionals.
 */

// 1. Basic Loop
for (let i = 5; i <= 10; i++) {
  console.log(i);
}

// 2. Loop with Break
for (let j = 20; j >= 13; j--) {
  if (j === 13) break;
  console.log(j);
}

// 3. Loop with Continue for Even Numbers
for (let k = 2; k <= 10; k++) {
  if (k % 2 !== 0) continue;
  console.log(k);
}

// 4. While Loop for Even Numbers
let num = 2;
while (num <= 10) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

// 5. Populate and Display Array
const arrayOfNumbers = [];
for (let n = 5; n <= 10; n++) {
  arrayOfNumbers.push(n);
  console.log(arrayOfNumbers[n-5]);
}

// 6. Pyramid Pattern
const pyramidLines = 5;
let pyramid = '';
for (let i = 0; i <= pyramidLines; i++) {
  pyramid += ' '.repeat(pyramidLines - i);
  pyramid += '*'.repeat(2 * i + 1);
  pyramid += '\n';
}
console.log(pyramid);

/*
[YOUR_FEEDBACK_GOES_HERE]
 */
