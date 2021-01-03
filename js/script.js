"use strict";

let personalMovieDB =  {
    count: 0, 
    movies: {},
    actor: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');       
        }  
    },
    rememberMyFilms: () => {
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
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == true) {
            personalMovieDB.privat = !true;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            // let ganre = prompt(`Ваш любимый жанр под номером ${i}`);

            // if (ganre == '' || ganre == null) {
            //     console.log(`Вы ввели некорректные данные или не ввели вовсе`);
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = ganre;
            // }
            let ganres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if (ganres == '' || ganres == null) {
                console.log(`Вы ввели некорректные данные или не ввели вовсе`);
                i--;
            } else {
                personalMovieDB.genres = ganres.split(', ');
            }
        }

        personalMovieDB.genres.forEach((element, index) => {
            console.log(`Любимый жанр ${index + 1} - это ${element}`);
        });
    }
};