import { sectionLog, sectionHeader} from '../utils.js';
/*
  (*) Продвинутая задача на работу с объектами и массивами

У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData.
Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения;
стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.
Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку.
Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно',
если нет - 'Бюджета недостаточно'. И все 🙂
Но эта задача содержит несколько подзадач внутри:

- вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
- вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
- определение того, хватает ли бюджета на оплату такого объема;
- все числа идут без единиц измерения для упрощения, просто цифры и все;
- функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.

1.1) переделать под метод
 */

const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5
    },
    {
      width: 15,
      length: 7
    },
    {
      width: 20,
      length: 5
    },
    {
      width: 8,
      length: 10
    }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
  budgetEnough: function () {
    const { shops, height, moneyPer1m3, budget } = this;
    const totalArea = shops.reduce((acc, shop) => acc + shop.width * shop.length, 0);
    const totalVolume = totalArea * height;
    const totalCost = totalVolume * moneyPer1m3;
    return budget >= totalCost ? 'Бюджета достаточно' : 'Бюджета недостаточно';
  }
};

function isBudgetEnough(data) {
  const { shops, height, moneyPer1m3, budget } = data;
  const totalArea = shops.reduce((acc, shop) => acc + shop.width * shop.length, 0);
  const totalVolume = totalArea * height;
  const totalCost = totalVolume * moneyPer1m3;
  return budget >= totalCost ? 'Бюджета достаточно' : 'Бюджета недостаточно';
}

/*
  (*) Продвинутая задача на работу с объектами и массивами
Задача:

У вас есть список учеников, которые хотят поиграть в игру:

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку.
Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

Пример:

sortStudentsByGroups(students)  =>
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi'
]

Если убрать одно студента из списка, то результат будет:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: -'
]

А если добавить одного, то:

[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi, Somebody'
]
То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.
*/

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
  const result = [];
  const sortedStudents = arr.sort();
  const totalStudents = sortedStudents.length;
  const studentsPerGroup = Math.floor(totalStudents / 3);
  let index = 0;
  for (let i = 0; i < 3; i++) {
    const newGroup = [];
    for (let j = 0; j < studentsPerGroup; j++) {
      newGroup.push(sortedStudents[index]);
      index++;
    }
    result.push(newGroup);
  }
  const remainingStudents = sortedStudents.slice(index);
  const remainingString = remainingStudents.length > 0 ? remainingStudents.join(', ') : '-';
  result.push(`Оставшиеся студенты: ${remainingString}`);
  return result;
}

sectionLog('homework_7', {
  'isBudgetEnough': isBudgetEnough(shoppingMallData),
  'budgetEnough method': shoppingMallData.budgetEnough(),
  'sortStudentsByGroups': sortStudentsByGroups(students)
});
