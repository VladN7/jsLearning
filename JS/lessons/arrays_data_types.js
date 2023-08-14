const answers = [];
answers[0] = prompt('Как вас зовут?', '');
answers[1] = prompt('Сколько вам лет', '');
answers[2] = prompt('Откуда Вы?', '');

console.log(typeof answers);

const array = [1, 'Vlad', true, {date: 21}];
array[10] = 156;
console.log(array);

// Basic for loop
for (let i = 5; i <= 10; i++) {
  console.log(i);
}

// Array operations
const arrayOfNumbers = [];
for (let n = 5; n <= 10; n++) {
  arrayOfNumbers.push(n);
  console.log(arrayOfNumbers[n-5]);
}