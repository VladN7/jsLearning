// Coding Exercise 7

/*

(*) Задачи:

  1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

  Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.


2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.

  Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:

Функция принимает только целое число от 1 до 36.

Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

  "Ошибка. Проверьте правильность введенного номера места"

Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

Пример:

  getCoupeNumber(33)  => 9

getCoupeNumber(7)  => 2

getCoupeNumber(300)  => "Таких мест в вагоне не существует"

getCoupeNumber(0)  => "Таких мест в вагоне не существует"

getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

Такая функция вполне реальна и может использоваться для формирования билетов, в том числе и визуально на сайтах.
Конечно, там будет куда больше условий, но смысл остается таким же.

 */
'use strict';
// 1)
function calculateVolumeAndArea (length) {
  if (typeof length !== 'number' || length <= 0 || length % 1 !== 0) {
    console.log('При вычислении произошла ошибка');
    return 'При вычислении произошла ошибка';
  }
  let volume = length * length * length;
  let area = 6 * (length * length);
  return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

//Change the argument to test the function
console.log(calculateVolumeAndArea(5));

// 2)
function getCoupeNumber (seatNumber) {
  if (typeof seatNumber !== 'number' || seatNumber <= 0 || seatNumber > 36) {
    return 'Ошибка. Проверьте правильность введенного номера места';
  }
  let coupeNumber = Math.ceil(seatNumber / 4);
  return coupeNumber;
}
//Change the argument to test the function
console.log(getCoupeNumber(8));
getCoupeNumber();

// Coding exercise 8

/*
(*) Задачи:

1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример).
Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число,
дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов).
Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд).
Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов).
Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:

getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них.
 Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

3) (мое) Добавить секунды в функцию getTimeFromMinutes

Пример:

findMaxNumber(1, 5, 6.6, 11); =>  11

findMaxNumber(1, 5, '6', '10');  =>  0

 */
//1)

function getTimeFromMinutes (minutes) {
  if (typeof minutes !== 'number' || minutes < 0 || minutes % 1 !== 0 || minutes > 600) {
    return 'Ошибка, проверьте данные';
  }
  let hours = Math.floor(minutes / 60);
  let minutesLeft = minutes % 60;
  let seconds = Math.floor(minutesLeft * 60);
  if (hours === 0) {
    return `Это 0 часов и ${minutesLeft} минут или ${seconds} секунд`;
  }
  if (hours === 1) {
    return `Это 1 час и ${minutesLeft} минут или ${seconds} секунд`;
  }
  if (hours > 1 && hours < 5) {
    return `Это ${hours} часа и ${minutesLeft} минут или ${seconds} секунд`;
  }
  if (hours >= 5 && hours <= 10) {
    return `Это ${hours} часов и ${minutesLeft} минут или ${seconds} секунд`;
  }
  if (hours > 10) {
    return `Это ${hours} часов и ${minutesLeft} минут или ${seconds} секунд`;
  }
}
//Change the argument to test the function
console.log(getTimeFromMinutes(150));
getTimeFromMinutes();

//2)

function findMaxNumber (num1, num2, num3, num4) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number' || typeof num4 !== 'number') {
    return 0;
  }
  let maxNumber = Math.max(num1, num2, num3, num4);
  return maxNumber;
}
//Change the argument to test the function
console.log(findMaxNumber(1, 5, 6.6, 11));
findMaxNumber();

// Coding exercise 9

/*
(**) Задачи:

Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число.
Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи.
Причем, их количество должно быть равно переданному аргументу.

Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

 */

function fib(num) {
  if (typeof num !== 'number' || num <= 0 || num % 1 !== 0) {
    return '';
  }

  if (num === 1) {
    return '0';

  } else {
    let arr = [0, 1];
    for (let i = 2; i < num; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr.join(' ');
  }
}
//Change the argument to test the function
console.log(fib(1));


