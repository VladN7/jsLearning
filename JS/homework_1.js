const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

const askAboutMovies = {
  askMovieA: prompt('Один из последних просмотренных фильмов?', ''),
  askMovieRatingA: prompt('На сколько оцените его?', ''),
  askMovieB: prompt('Один из последних просмотренных фильмов?', ''),
  askMovieRatingB: prompt('На сколько оцените его?', '')
};

personalMovieDB.movies[askAboutMovies.askMovieA] = askAboutMovies.askMovieRatingA;
personalMovieDB.movies[askAboutMovies.askMovieB] = askAboutMovies.askMovieRatingB;

console.log(personalMovieDB);