'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

// box.style.background='blue';
// box.style.width='500px';
box.style.cssText='background-color:blue; width: 500px';

btns[1].style.borderRadius='100%';
circles[0].style.backgroundColor='green';



// for (let i=0;i<hearts.length;i++){
//     hearts[i].style.backgroundColor='yellow'
// }
hearts.forEach(item=>{
    item.style.backgroundColor='yellow';
});

const div = document.createElement('div');
const text= document.createTextNode('тут был я')
div.classList.add('black');
// document.querySelector('.wrapper').append(div);
// wrapper.append(div);//вставить в конец
// wrapper.prepend(div);//вставить в начало

// hearts[0].before(div);//перед
hearts[0].after(div);
circles[1].remove();//удалить
hearts[0].replaceWith(circles[0])//замена

// div.innerHTML='<h1>hello</h1>';//вставка html в элемент
// div.textContent='hello'//только текст

div.insertAdjacentHTML('beforebegin','<h2>hello</h2>')//вставка html в элемент