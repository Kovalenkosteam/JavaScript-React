const numberOfFilms= +prompt('Сколько фильмов просмотрено?', '');

const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

const a= prompt('Какой последний фильм сторел?');
const b= prompt('оцени его');
const c= prompt('Какой последний фильм сторел?');
const d= prompt('оцени его');
personalMovieDB.movies.a=b;// так бывают лаги при выводе информации. лучше в []
personalMovieDB.movies[c]=d;
console.log(personalMovieDB);