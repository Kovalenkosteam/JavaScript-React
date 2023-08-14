'use strict';
const inputRub=document.querySelector('#rub');
const inputUsd=document.querySelector('#usd');

inputRub=addEventListener('input',()=>{
	const request= new XMLHttpRequest();
	// request.open(method, url, async, login, pass); собирает настройки запроса

	// method
	// GET-получить данные с сервера
	// POST-отправить данные на сервер

	// url
	// путь до JSON относительно index.html

	// async
	// синхронный или асинхронный запрос(код выполняется построчно, либо парралельно)

	// login,pass 
	// скорее всего для входа на сервер

	request.open('GET', './current.JSON');
	// request.open('GET', './current1.JSON');
	request.setRequestHeader('Content-type','application/json;charset=utf-8');
	request.send();
	request.addEventListener('readystatechange',()=>{
		if(request.readyState===4 && request.status===200){ //4 и 200 есть в таблицах
			console.log(request.response);
			const data=JSON.parse(request.response);
			inputUsd.value=+(inputRub.value/data.current.usd).toFixed(3);
		} else{
			inputUsd.value='какая-то хуйня';
		}
	});
});