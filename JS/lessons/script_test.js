/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами

5) (моё) Проверить, что пользователь ввел корректные данные

*/

'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
if (numberOfFilms === null || numberOfFilms.length > 50 || numberOfFilms === '' || numberOfFilms <= 0) {
  console.log('count typeof error');
} else if (typeof numberOfFilms === 'number') {
  console.log('count success');
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

for (let i = 0; i < 2; i++) {
  let movie = prompt('Один из последних просмотренных фильмов?', ''),
    rating = prompt('На сколько оцените его?', '');
  if (movie === null || movie === undefined || movie === '' || movie.length > 50 || rating === null || rating === undefined || rating === '' || rating.length > 50 || rating <= 0) {
    i--;
    console.log('answer type error');
  } else {
    personalMovieDB.movies[movie] = rating;
    console.log('...done');
  }
}

if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман');
} else if (typeof personalMovieDB.count === 'string'|| personalMovieDB.count === null || personalMovieDB.count <= 0 || personalMovieDB.count === '') {
  console.log('Вы не ввели количество просмотренных фильмов');
} else {
  console.log('Произошла ошибка');
}

console.log(personalMovieDB);

/* Rework needed in practice 3 lesson add func

 // 2nd way

let k = 0;
while (k < 2) {
  let movie = prompt('Один из последних просмотренных фильмов?', ''),
    rating = prompt('На сколько оцените его?', '');

  if (movie === null || movie === '' || movie.length > 50 || rating === null || rating === '' || rating.length > 50) {
i--;
  }   else {
    personalMovieDB.movies[movie] = rating;
  }
   k++;
}

// 3rd way

let j = 0;
do {let movie = prompt('Один из последних просмотренных фильмов?', ''),
  rating = prompt('На сколько оцените его?', '');
if (movie === null || movie === '' || movie.length > 50 || rating === null || rating === '' || rating.length > 50) {
  j--;
} else {
  personalMovieDB.movies[movie] = rating;
}
  j++;
}
while (j < 2);
*/
