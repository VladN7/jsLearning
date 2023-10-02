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
  // Пипец как долго искал как сделать этот this и коротко записаить
  showAgeAndLangs: function() {
    const {
      age,
      skills: {
        languages
      }
    } = this;
    return languages.length
      ? `I am ${age} and I speak: ${languages.join(', ').toUpperCase()}`
      : `I am ${age} I don't know how any languages hahaha`;
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

sectionLog('Homework 6', {
  'Show Programming Languages': showProgLangs(personalPlanVlad),
  'Show Experience': showExperience(personalPlanVlad),
  'Show Age and Languages': personalPlanVlad.showAgeAndLangs(),
  'Show Family': showFamily(family),
  'Standardized Strings': showStandardizedStr(favoriteCities),
});

// P.S. for @mascotik
// Во всем этом бесит только, что есть зависимость от объекта, который передается в функцию