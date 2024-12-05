const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов просмотрено?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов просмотрено?', '');
        }
    },
    rememberMyFilsm: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Какой последний фильм сторел?', '').trim();
            const b = prompt('оцени его', '');
            if (a != null && b != null & a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPeronalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('мало');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('средне');
        } else {
            console.log('ебать много')
        }
    },
    showMyDB: function (DB) {
        if (DB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            if(personalMovieDB.genres[i]==''||personalMovieDB.genres[i]==null){
                i--;
            }
        };
        personalMovieDB.genres.forEach((item,i)=>{
            console.log(`Ваш любимый жанр по номером ${i+1} это ${item}`)
        })
    },
    toggleVisibleMyDB:function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat=false
        }else{
            personalMovieDB.privat=true;
        }
    }
};
// personalMovieDB.start();
// personalMovieDB.rememberMyFilsm();
// personalMovieDB.detectPeronalLevel();
personalMovieDB.showMyDB(personalMovieDB);
personalMovieDB.writeYourGenres();

