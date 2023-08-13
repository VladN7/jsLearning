function firstTask() {

  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
  }
  return result;
}
function secondTask() {

  const data = [5, 10, 'Shopping', 20, 'Homework'];

  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'number') {
      data[i] *=2;
    }
    if (typeof  data[i] === 'string') {
      data[i] += ' - done';
    }
  }
  return data;
}
function thirdTask() {

  const data = [5, 10, 'Shopping', 20, 'Homework'];
  const result = [];

  for (let i = data.length - 1; i >= 0; i--) {
    result.push(data[i]);
  }

  return result;
}
// Pyramid pattern
const pyramidHeight = 5;
let pyramid = '';

for (let l = 0; l <= pyramidHeight; l++) {
  for (let space = 0; space < pyramidHeight - l; space++) {
    pyramid += ' ';
  }
  for (let star = 0; star < 2 * l + 1; star++) {
    pyramid += '*';
  }
  pyramid += '\n';
}

console.log(pyramid);


