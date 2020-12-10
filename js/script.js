"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ||numberOfFilms.length >50) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');       
    }  
}  
start();

let personalMovieDB =  {
    count: numberOfFilms, 
    movies: {},
    actor: {},
    genres: [],
    privat: false,
};

// const a = prompt('Один из последних просмотренных фильмов', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов', ''),
//       d = prompt('На сколько оцените его?', '');


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!');
        } else {
            console.log('Eror!');
            i--;
        }
    }    
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();


//  Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции 
// false - выводит в консоль главные обьект программы 

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();


// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);


// Создать функцию writeYourGenres в которой пользователь будет 3 раза
// отвечать на вопрос "Ваш любимый жанр под номером ${номер по порядку}".
// Каждый ответ записывается в масив ganres

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let q = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres.push(q);
    }
}

writeYourGenres();