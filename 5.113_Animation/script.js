'use strict';

const btnPhone = document.querySelector('#iphone'),
	btnMacbook = document.querySelector('#macbook'),
	images = document.querySelectorAll('img');

// const phoneAnimation = images[0].animate([
// 	{ transform: 'translateX(0)' },
// 	{ transform: 'translateX(100px)' },
// 	{ transform: 'translateY(-100px)' },
// 	{ transform: 'translateY(0)' }
// 	],
// 	{
// 	iteration: Infinity,
// 	duration:3000

// });






let phoneAnimation;
btnPhone.addEventListener('click', () => {
	if (!phoneAnimation) {

		phoneAnimation = images[0].animate([
			{ transform: 'translateX(0) rotate(0deg)',
		filter:'opacity(100%)' },
			{ transform: 'translateX(100px) rotate(180deg)',
			filter:'opacity(10%)' },
			{ transform: 'translateY(-100px) rotate(270deg)',
			filter:'opacity(100%)' },
			{ transform: 'translateY(0) rotate(360deg)',
			filter:'opacity(10%)' }
			],
			{
				iteration: Infinity,
				duration: 3000
			});
	} else if(phoneAnimation.playState==='paused'){
		phoneAnimation.play();
	}else{
		phoneAnimation.pause();
	}
})