"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    privat: false,
};

const watchedMovie = prompt('Один из последних просмотренных фильмов', ''),
      moviePoints = +prompt('На сколько оцените его?', ''),
      watchedMovie2 = prompt('Один из последних просмотренных фильмов', ''),
      moviePoints2 = +prompt('На сколько оцените его?', '');


personalMovieDB.movies[watchedMovie] = moviePoints;
personalMovieDB.movies[watchedMovie2] = moviePoints2;

console.log(personalMovieDB);