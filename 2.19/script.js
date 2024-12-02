const numberOfFilms = +prompt('Сколько фильмов просмотрено?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Какой последний фильм сторел?', '');
    const b = prompt('оцени его', '');
    if (a != null && b != null & a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('мало');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('средне');
} else {
    console.log('ебать много')
}
console.log(personalMovieDB);