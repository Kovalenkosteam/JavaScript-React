'use strict';

const box = document.getElementById('box');
console.log(box);
const btns=document.getElementsByTagName('button');
console.log(btns[2]);
const circles=document.getElementsByClassName('circle');
console.log(circles);
const heart=document.querySelectorAll('.heart')
heart.forEach(item=>{
    console.log(item)
})
console.log(heart)

const oneHeart=document.querySelector('.heart');
console.log(oneHeart)