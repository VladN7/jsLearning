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

6) (моё) Заменить на функции
*/
'use strict';

function getNumberOfFilms() {
  let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

  if (numberOfFilms === null || numberOfFilms === '' || isNaN(+numberOfFilms) || +numberOfFilms <= 0) {
    console.log('count typeof error');
  } else {
    console.log('count success');
  }
  return +numberOfFilms;
}

let numberOfFilms = getNumberOfFilms();
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

function declarePrompts() {
  return {
    moviePrompt: prompt('Один из последних просмотренных фильмов?', ''),
    ratingPrompt: prompt('На сколько оцените его?', '')
  };
}

function getPersonalMovieDB() {
  let movies = {};

  for (let i = 0, retries = 0; i < 2;) {
    let moviePrompts = declarePrompts();
    let movie = moviePrompts.moviePrompt,
      rating = moviePrompts.ratingPrompt;

    if (movie === null || movie === '' || movie.length > 50 ||
      rating === null || rating === '' || rating.length > 50 || isNaN(+rating) || +rating <= 0) {
      retries++;
      console.log('answer type error');
      if (retries >= 3) {
        console.log('Too many invalid inputs. Exiting');
        break;
      }
    } else {
      movies[movie] = rating;
      console.log('...done');
      i++;
    }
  }
  return {
    ...personalMovieDB,
    movies: movies,
  };
}
function getCountMessage() {
  let countMessage = '';
  if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
    countMessage = 'Просмотрено довольно мало фильмов';
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    countMessage = 'Вы классический зритель';
  } else if (personalMovieDB.count >= 30) {
    countMessage = 'Вы киноман';
  } else {
    countMessage = 'Вы не ввели количество просмотренных фильмов';
  }
  console.log(countMessage);
  return countMessage;
}

personalMovieDB = getPersonalMovieDB();
console.log(personalMovieDB);
getCountMessage();