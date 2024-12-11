/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "aaa",
        "яяя"
    ]
};

// --------------------------------

const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(item => {
    item.remove()
})

// ----------------------------

const poster = document.querySelector('.promo__bg');
const genre = poster.querySelector('.promo__genre')
genre.textContent = 'Драма';

// -----------------------------------

poster.style.backgroundImage = 'url(img/bg.jpg)';

// --------------------------------------
// const movieList=document.querySelector('.promo__interactive-list');

// movieDB.movies.sort().forEach((item,i)=>{
//     movieList.insertAdjacentHTML('beforeend',`<li class="promo__interactive-item">${i+1}.${item}
//                             <div class="delete"></div>
//                         </li>`)
// })

// -------------------------------
const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `
})