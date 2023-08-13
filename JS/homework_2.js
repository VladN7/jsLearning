for (let i = 5; i <= 10; i++) {
  console.log(i);
}

for (let j = 20; j <= 20; j--) {
  if (j === 13) break;
  console.log(j);
}

for (let k = 2; k <=10; k++) {
  if (k % 2 !== 0) continue;
  console.log(k);
}

let num = 2;
while (num <= 10) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

const arrayOfNumbers = [];

for (let n = 5; n <= 10; n++) {
  arrayOfNumbers.push(n);
  console.log(arrayOfNumbers[n-5]);
}
