const num = 50;

switch (num) {
case 49:
  console.log('Мда');
  break;
case 51:
  console.log('Попал');
  break;
default:
  console.log('Не попал');
  break;
}

const hamburger = 3,
  fries = 1,
  cola = 4,
  nuggets = 2;

if ((hamburger === 3 && nuggets >= 1 && cola) || (fries > 1 && cola >= 4 && nuggets === 2)) {
  console.log('Successful equation'); }
else console.log('Error');


//// While / do / for


let Int = 50;

while (Int <= 55) {
  console.log(Int);
  Int++;
}

do {
  console.log(Int);
  Int++;
}
while (Int < 55);
console.log(Int);

////

for (i = 1; i <= 8; i++) {
  if (i === 6) {
    // break;
    continue;
  }
  console.log(i);
}

