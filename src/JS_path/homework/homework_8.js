import {sectionLog} from '../utils.js';

/*
 1) Функция isOpen не хочет правильно работать. Что мы уже не пробовали подставлять в неё - результат все время неправильный.
 Необходимо найти причины и исправить.

2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню, складывать их и сравнивать с средним чеком (averageLunchPrice).
Сейчас функция работает, но постоянно выдает неправильный результат. Ведь из представленного меню сумма двух любых цен всегда будет больше 20.
Необходимо найти причину и исправить.

3) Функция transferWaitors создана для того, чтобы копировать шаблон данных и передавать их в другой ресторан.
Конечно, в другом ресторане будут другие блюда, другие официанты и тп. Сейчас эта функция только в начале разработки и должна менять данные про официантов.
Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит новых официантов, но и основные данные!
В restorantData сотрудник Alice исчезает и заменяется Mike!
Необходимо найти причину и немедленно исправить, чтобы данные были разделены.
 */

const restaurantData = {
  menu: [
    {
      name: 'Salad Caesar',
      price: '14$'
    },
    {
      name: 'Pizza Diavola',
      price: '9$'
    },
    {
      name: 'Beefsteak',
      price: '17$'
    },
    {
      name: 'Napoleon',
      price: '7$'
    }
  ],
  waiters: [
    {name: 'Alice', age: 22}, {name: 'John', age: 24}
  ],

  averageLunchPrice: '20$',
  openNow: true
};

function isOpen(data) {
  return data.openNow ? 'Ресторан открыт' : 'Ресторан закрыт';
}

function isAverageLunchPriceTrue(data, firstDish, secondDish) {
  const dishPrices = [firstDish.price, secondDish.price];
  const average = Number(data.averageLunchPrice.replace('$', ''));
  const sum = dishPrices.reduce((acc, price) => acc + Number(price.replace('$', '')), 0);
  return sum > average;
}

function transferWaiters(data) {
  const { waiters } = data;
  return waiters.map(waiter => ({...waiter}));
}

sectionLog('Debug assignment', {
  'isOpen': isOpen(restaurantData),
  'isAverageLunchPriceTrue': isAverageLunchPriceTrue(restaurantData, restaurantData.menu[0], restaurantData.menu[1]),
  'transferWaiters': transferWaiters(restaurantData)
});
