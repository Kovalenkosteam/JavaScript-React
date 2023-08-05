'use strict'
document.addEventListener('DOMContentLoaded', () => {

	//Tabs
	const tabs = document.querySelectorAll('.tabheader__item');
	const tabsContent = document.querySelectorAll('.tabcontent');
	const tabsParents = document.querySelector('.tabheader__items');

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});
		tabs.forEach(item => { item.classList.remove('tabheader__item_active'); });
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabContent();
	showTabContent();

	tabsParents.addEventListener('click', (event) => {
		const target = event.target;
		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});


	//Timer

	const deadline = '2023-09-25';

	function getTimeRemaining(endTime) {
		let days, hours, minutes, seconds;
		const t = Date.parse(endTime) - Date.parse(new Date());
		if (t <= 0) {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		} else {
			days = Math.floor(t / (1000 * 60 * 60 * 24));
			hours = Math.floor((t / (1000 * 60 * 60)) % 24);
			minutes = Math.floor((t / (1000 * 60)) % 60);
			seconds = Math.floor((t / 1000) % 60);
		}

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function setClock(selector, endTime) {
		const timer = document.querySelector(selector);
		const days = timer.querySelector('#days');
		const hours = timer.querySelector('#hours');
		const minutes = timer.querySelector('#minutes');
		const seconds = timer.querySelector('#seconds');
		const timeInterval = setInterval(updateClock, 1000);

		updateClock();
		function updateClock() {
			const t = getTimeRemaining(endTime);
			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);
			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}
	setClock('.timer', deadline);


	//Modal

	const modalTrigger = document.querySelectorAll('[data-modal]');
	const modalCloseBtn = document.querySelector('[data-close');
	const modal = document.querySelector('.modal');
	const modalDialogue = document.querySelector('.modal__dialog');

	modalTrigger.forEach((item) => {
		item.addEventListener('click', openModal);
	});

	function openModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow = 'hidden';
		clearInterval(modalTimerId);
	}


	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = '';
	}

	modal.addEventListener('click', (event) => {
		if (event.target === modal) {
			closeModal();
		}
	});

	modalCloseBtn.addEventListener('click', closeModal);

	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape' && modal.classList.contains('show')) {
			closeModal();
		}
	});

	// const modalTimerId = setTimeout(openModal, 35000);

	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal();
			clearInterval(modalTimerId);
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);

	//Исполльзование классов для карточек
	class MenuCard {
		constructor(src, alt, title, descr, price, parentSelector) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.tranfer = 70;
			this.parent = document.querySelector(parentSelector);
			this.changeToRub();
		}
		changeToRub() {
			this.price = this.price * this.tranfer;
		}
		render() {
			const element = document.createElement('div');
			element.innerHTML = `
				<div class="menu__item">
					<img src=${this.src} alt=${this.alt}>
						<h3 class="menu__item-subtitle">${this.title}</h3>
						<div class="menu__item-descr">${this.descr}
						</div>
						<div class="menu__item-divider"></div>
						<div class="menu__item-price">
							<div class="menu__item-cost">Цена:</div>
							<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
						</div>
				</div>
			`;
			this.parent.append(element);
		}
	}


	new MenuCard(
		'img/tabs/vegy.jpg',
		'vegy',
		'Меню "Фитнес"',
		'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
		9,
		'.menu .container'
	).render();

	new MenuCard(
		'img/tabs/elite.jpg',
		'elite',
		'Меню “Премиум”',
		'В меню “Премиум” мы используем не только красивый дизайн упаковки, но	и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
		14,
		'.menu .container'
	).render();

	new MenuCard(
		'img/tabs/post.jpg',
		'post',
		'Меню "Постное"',
		'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из  миндаля, овса, кокоса или гречки, правильное	количество белков за счет тофу и импортных вегетарианских стейков.',
		21,
		'.menu .container'
	).render();
});















// function hideTabContent() {
// 	tabsContent.forEach(item => {item.style.display = 'none';});
// 	tabs.forEach(item => {item.classList.remove('tabheader__item_active');});
// }

// function showTabContent(i = 0) {
// 	tabsContent[i].style.display = 'block';
// 	tabs[i].classList.add('tabheader__item_active');
// }


// hideTabContent();
// showTabContent();

// tabsParents.addEventListener('click', (event) => {
// 	const target = event.target;
// 	if (target && target.classList.contains('tabheader__item')) {
// 		tabs.forEach((item, i) => {
// 			if (target == item) {
// 				hideTabContent();
// 				showTabContent(i);
// 			}
// 		});
// 	}
// });
