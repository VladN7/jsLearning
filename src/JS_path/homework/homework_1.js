/*
 * JavaScript Homework 1
 * Description: Basic user interactions and object population.
 */

// User inputs number of films watched
const filmsWatched = prompt('Сколько фильмов вы уже посмотрели?');

// Initial movie database object
const movieDB = {
  count: filmsWatched,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

// User provides details about two movies
const firstMovie = {
  name: prompt('Один из последних просмотренных фильмов?', ''),
  rating: prompt('На сколько оцените его?', '')
};
const secondMovie = {
  name: prompt('Один из последних просмотренных фильмов?', ''),
  rating: prompt('На сколько оцените его?', '')
};

// Populating movie details into movie database
movieDB.movies[firstMovie.name] = firstMovie.rating;
movieDB.movies[secondMovie.name] = secondMovie.rating;

// Display the populated movie database
console.log(movieDB);

// Feedback:

/*
[YOUR_FEEDBACK_GOES_HERE]
 */
