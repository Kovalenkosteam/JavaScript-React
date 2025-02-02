'use strict';
// localStorage.setItem('number',5);
// localStorage.setItem('line','two');
// console.log(localStorage.getItem('number'));
// localStorage.removeItem('number');
// localStorage.clear();


const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}
change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const persone = {
    name: 'John',
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('John', serializedPersone);

console.log(JSON.parse(localStorage.getItem('John')));



