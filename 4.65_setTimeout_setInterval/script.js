// const timerId=setTimeout(function() {console.log('hello');},2000);
// const timerId=setTimeout(function(text) {console.log(text);},2000,'hello');



// const timerId=setTimeout(logger,2000);
// function logger(){
// 	console.log('hello');
// }

// //сброс таймера
// clearInterval(timerId);



// const btn = document.querySelector('.btn');
// let timerId;
// let i=0;
// // btn.addEventListener('click', function () {
// 	// const timerId = setTimeout(logger, 2000);
// 	timerId = setInterval(logger, 500);
// });
// clearInterval(timerId);

// function logger(){
// 	if (i==3){
// 		clearInterval(timerId);
// 	}
// 	console.log('hello');
// 	i++;
// }


// let id=setTimeout(function log(){
// 	console.log('hello');
// 	id=setTimeout(log,500);
// },500);

// let timerId;
// let i = 0;

const btn = document.querySelector('.btn');
const elem = document.querySelector('.box');


// function myAnimation() {
// 	let pos = 0;

// 	const id=setInterval(frame,10);
// 	function frame() {
// 		if (pos == 300) {
// 			clearInterval(id);
// 		}else{
// 			pos++;
// 			elem.style.top=pos+'px';
// 			elem.style.left=pos+'px';
// 		}
// 	}
// }

let pos = 0;
function myAnimation() {
	pos++;
	elem.style.top = pos + 'px';
	elem.style.left = pos + 'px';

	if (pos < 350) {
		requestAnimationFrame(myAnimation);
	}
}
btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

let id=requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);