/*
1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
Пример:
showExperience(personalPlanVlad) => '1 month'

P.S. желательно использовать деструктуризацию, но не обязательно
2) Напишите функцию showProgLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

Пример:

showProgLangs(personalPlanVlad)  =>
"Язык js изучен на 20% Язык php изучен на 10%"

Причем функция должна работать вне зависимости от количества языков.
Если ни один не указан, то возвращается пустая строка.
P.S. Для переноса строки используется \n в конце строки.

3) Создайте метод showAgeAndLangs внутри объекта personalPlanVlad.
При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

Пример:

personalPlanVlad.showAgeAndLangs(personalPlanVlad)
=> 'Мне 29 и я владею языками: RU ENG'

Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами).
Если данные в объекте поменяются, то и сообщение тоже изменится.
 */
import {sectionLog} from '../utils.js';

const personalPlanVlad = {
  name: 'Vlad',
  age: '18',
  skills: {
    languages: ['eng','ua', 'nl', 'ru'],
    programmingLangs: {
      js: '27%',
      py: '10%'
    },
    exp: '2 months'
  },
  showAgeAndLangs: function() {
    const { age, skills: { languages } } = this;
    return languages.length
      ? `I am ${age} and I speak: ${languages.join(', ').toUpperCase()}`
      : `I am ${age} I don't know how any languages hahaha`;
    // Пипец как долго искал как сделать этот this и коротко записаить
  }
};
function showExperience({ skills: { exp } }) {
  return exp;
}

//Тут через деструктуризацию и вариант с for( of) и Object.entries
function showProgLangs({ skills: { programmingLangs } }) {
  let result = '';
  for (let [key, value] of Object.entries(programmingLangs)) {
    key = key.toUpperCase();
    result += `Язык ${key} изучен на ${value}\n`;
  }
  return result.trim();
}
/*
New Tasks
4) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

5) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
 */
const family = ['Jim', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  return arr.length ? `Семья состоит из: ${arr.join(' ')}` : 'Семья пуста';
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function showStandardizedStr(arr) {
  return arr.map(city => city.toLowerCase()).join('\n');
}

// P.S. for @mascotik
// Во всем этом бесит только, что есть зависимость от объекта, который передается в функцию

/*
Продолжаем решение задач на массивы.

3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

Пример:

const someString = 'This is some strange string';
reverse(someString) => 'gnirts egnarts emos si sihT'

Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение 'Ошибка!'

*/
const someString = 'This is some strange string';
function reverse(str) {
  if (str === '') {
    return 'Ошибка!';
  }
  return str.split('').reverse().join('');
}
/*
4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах.
Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента:
первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться),
второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате.
Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'.
Функция возвращает строку в нужном виде.

Пример:

availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Вернет строку:

Доступные валюты:
UAH
RUB
Заметьте:

- CNY (юань) исчез из списка валют, значит такая валюта закончилась

- После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку
 */

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'JPN', 'CNY'];

function availableCurr(arr, currency) {
  if (!arr.length) {
    return 'Нет доступных валют';
  }
  let result = 'Available currencies: ';
  if (currency) {
    arr.splice(arr.indexOf(currency), 1);
  }
  arr.forEach((curr) => {
    result += `${curr}\n`;
  });
  return result.trim();
}

sectionLog('Homework 6', {
  'Show Programming Languages': showProgLangs(personalPlanVlad),
  'Show Experience': showExperience(personalPlanVlad),
  'Show Age and Languages': personalPlanVlad.showAgeAndLangs(),
  'Show Family': showFamily(family),
  'Standardized Strings': showStandardizedStr(favoriteCities),
  'Reverse String': reverse(someString),
  'Bank Task': availableCurr([...baseCurrencies, ...additionalCurrencies], 'USD')
});
