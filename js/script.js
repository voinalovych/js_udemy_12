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

                // for
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done!');
//     } else {
//         console.log('Eror!');
//         i--;
//     }
// }

                // do...while
// do {
//     const a = prompt('Один из последних просмотренных фильмов', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done!');
//     } else {
//         console.log('Eror!');
//     }
// } while (Object.keys(personalMovieDB.movies).length < 2);


                // while
// let cycle = 0;

// while (cycle < 2) {
//     const a = prompt('Один из последних просмотренных фильмов', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done!');
//     } else {
//         console.log('Eror!');
//     }
//     cycle++;

// }



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

