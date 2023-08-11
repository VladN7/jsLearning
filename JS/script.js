'use strict';
// const result = confirm('Are you there?');
// console.log(result)
// const result = +prompt('Are you 18?', 18);
// console.log(result + 5);
//
// const answers = [];
//
// answers [0] = prompt('Как вас зовут?', '');
// answers [1] = prompt('Сколько вам лет', '');
// answers [2] = prompt('Откуда Вы?', '');
//
//
// console.log(typeof answers)
//
// const user = 'Vlad';
//
// alert(`Hello ${user}!`);

// let incr = 10,
//   decr = 10;
//
// ++incr;
//  --decr;
//
// console.log(incr, decr, incr++, decr--,);
// console.log(incr && decr);
/*
const isChecked = true,
  isClosed = false;

// eslint-disable-next-line no-console
console.log(isChecked && isClosed);
console.log(isChecked || isClosed);
console.log(isChecked && !isClosed);
console.log(2+2*2 != 8);
console.log(2+2*2 == 8);
console.log(2+2*2 === '6');
/*
// TEST CHECK //


/*
const library = {
  name: 'Nemesis',
  genres: ['Detective', 'Fun', 'Sports'],
  locations: ['Den Haag', 'Rotterdam', 'Delft'],
  isFree: true,
  books: [
    {
      title: 'The Expanse',
      price: '250',
      isBestseller: true,
      genre: 'Fun',
      publishYear: 2022
    },
    {
      title: 'No Sorrow',
      price: '300',
      isBestseller: false,
      publishYear: 2017
    }
  ]
};


const RevisoroDescription = {
  name: 'Revisoro',
  budget: 10000,
  employees: ['John', 'Sergio', 'Nancy'],
  isOpen: true,
  products: {
    'Pasta': 200,
    'Sushi': 800
  }
};

console.log(RevisoroDescription);

const obj = {
  name: 'Vlad',
  age: 18,
  isWorking: true
};
obj.hasGf = true;

const array = [1, 'Vlad', true, {date: 21}];
array[10] = 156;
// Enter property
const enteredProp = 'age';
console.log(obj[enteredProp]);
console.log(library.books[1]);
console.log('Does Vlad has GF?', obj.hasGf);
console.log('Is Vlad Working?',  obj.isWorking);
//console.log(array);

console.log(50 !== 250);
console.log(50 ==='50');
console.log(50 == '50');









const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');


const personalMovieDB = {
  count: numberOfFilms,
  movies: { },
  actors: { },
  genres: [ ],
  privat: false
};

const askMovieA = prompt('Один из последних просмотренных фильмов?', ''),
  askMovieRatingA = prompt('На сколько оцените его?', ''),
  askMovieB = prompt('Один из последних просмотренных фильмов?', ''),
  askMovieRatingB = prompt('На сколько оцените его?', '');

personalMovieDB.movies[askMovieA] = askMovieRatingA;
personalMovieDB.movies[askMovieB] = askMovieRatingB;

console.log(personalMovieDB);

