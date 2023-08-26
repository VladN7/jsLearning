/* Task for this practice on phase 1:

1) Automate the questions to the user about the movies using a loop

2) Make sure that the user cannot leave the answer as an empty string,
  cancel the answer or enter a movie name longer than 50 characters.
  If this happens - return the user to the questions again

3) Using conditions, check personalMovieDB.count, and if it is less than 10 - display a message
  "Watched quite a few movies", if from 10 to 30 - "You are a classic viewer", and if more - "You are a movie fan".
  And if it doesn't fit any of the options - "An error has occurred"

4) Practice and rewrite the loop in two more ways

5) (mine) Check that the user is entering correct data

6) (mine) Replace with functions

  Practice task #3

7) Create a function showMyDB, which will check the private property. If it is in position
false - displays the main program object in the console

8) Create a function writeYourGenres in which the user will answer 3 times to the question
"Your favorite genre number ${number in order}". Each answer is written to the genres data array

*/
'use strict';

function getNumberOfFilms() {
  let numberOfFilms = prompt('How many films have you watched?', '').trim();

  if (numberOfFilms === null || numberOfFilms === '' || isNaN(+numberOfFilms) || +numberOfFilms <= 0) {
    console.log('NumberOfFilms typeof error');
  } else {
    console.log('Films count success');
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
    moviePrompt: prompt('Write one of the last films you watched', '').trim(),
    ratingPrompt: prompt('How would you rate it?', '').trim()
  };
}

function getPersonalMovieDB() {
  for (let i = 0, retries = 0; i < 2;) {
    let moviePrompts = declarePrompts();
    let movie = moviePrompts.moviePrompt,
      rating = moviePrompts.ratingPrompt;

    if (movie === null || movie === '' || movie.length > 50 ||
      rating === null || rating === '' || rating.length > 50 || isNaN(+rating) || +rating <= 0) {
      retries++;
      console.log('MovieDB input type error');
      if (retries >= 3) {
        console.log('Too many invalid inputs. Exiting...');
        break;
      }
    } else {
      personalMovieDB.movies[movie] = rating;
      console.log('...getMovieDB done');
      i++;
    }
  }
}

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    let genre = prompt(`Your favourite genre #${i + 1}`, '');
    if (genre !== null && genre !== '' && isNaN(+genre)) {
      personalMovieDB.genres[i] = genre;
    } else {
      i--;
      console.log('Genre input error');
    }
  }
}

function showMyDB() {
  if (!personalMovieDB.private) {
    console.log(personalMovieDB);
  }
}

function getCountMessage() {
  if (personalMovieDB.count < 10) {
    console.log('Seems you have watched too few movies');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are a classic viewer');
  } else if (personalMovieDB.count >= 30) {
    console.log('You are a movie fan');
  } else {
    console.log('countMessage error');
  }
}

getPersonalMovieDB();
getCountMessage();
writeYourGenres();
showMyDB();
