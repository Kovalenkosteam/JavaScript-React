
// localStorage.setItem('number',5);
// localStorage.setItem('phone','android');
// let local = localStorage.getItem('number');
// console.log(local);
// localStorage.removeItem('phone');
// localStorage.clear();//полностью все удаляет


const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');

if (localStorage.getItem('bg')==='changed') {
	
	form.style.backgroundColor='red';
	
}

if (localStorage.getItem('isChecked')) {
	checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
	localStorage.setItem('isChecked', true);
});


change.addEventListener('click', () => {
	if (localStorage.getItem('bg')==='changed') {
		localStorage.removeItem('bg');
		form.style.backgroundColor='white';
		
	} else {
		localStorage.setItem('bg','changed');
		form.style.backgroundColor='red';
	}
});



const persone={
	name:'Alex',
	age:25
};

const serialzedPersone=JSON.stringify(persone);
localStorage.setItem('alex',serialzedPersone);
console.log(JSON.parse(localStorage.getItem('alex')));