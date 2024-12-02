let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов просмотрено?', '');

    while (numberOfFilms==''|| numberOfFilms==null||isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов просмотрено?', '');
    }
}
// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilsm(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Какой последний фильм сторел?', '').trim();
        const b = prompt('оцени его', '');
        if (a != null && b != null & a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
// rememberMyFilsm();


function detectPeronalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('мало');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('средне');
    } else {
        console.log('ебать много')
    }
}
// detectPeronalLevel();

function showmyDB(hidden){
    if(!hidden.privat){
        console.log(personalMovieDB);
    }
}
showmyDB(personalMovieDB);

function writeYourGenres(){
    for (let i =0;i<3;i++){
        personalMovieDB.genres[i]=prompt(`Ваш любимый жанр под номером ${i+1}`)
    }
}
writeYourGenres();
