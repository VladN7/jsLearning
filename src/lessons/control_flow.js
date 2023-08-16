// Break statement
for (let j1 = 20; j1 <= 20; j1--) {
  if (j1 === 13) break;
  console.log(j1);
}

// Continue statement
for (let k = 2; k <=10; k++) {
  if (k % 2 !== 0) continue;
  console.log(k);
}

// While loop with conditional
let num = 2;
while (num <= 10) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}
