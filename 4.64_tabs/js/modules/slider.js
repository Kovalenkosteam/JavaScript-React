function slider() {
	//slider

	const slides = document.querySelectorAll('.offer__slide');
	const prev = document.querySelector('.offer__slider-prev');
	const next = document.querySelector('.offer__slider-next');
	const total = document.querySelector('#total');
	const current = document.querySelector('#current');
	const slider = document.querySelector('.offer__slider');
	let slideIndex = 1;
	const slidesWrapper = document.querySelector('.offer__slider-wrapper');
	const slidesField = document.querySelector('.offer__slider-inner');
	let offset = 0;
	let width = window.getComputedStyle(slidesWrapper).width;
	let dots = [];

	if (slides.length < 10) {
		total.textContent = `0${slides.length}`;
		current.textContent = `0${slideIndex}`;
	} else {
		total.textContent = `${slides.length}`;
		current.textContent = `${slideIndex}`;
	}


	slidesField.style.width = 100 * slides.length + '%';
	// slidesField.style.display = 'flex';
	// slidesField.style.transition = '0.5s all';
	// slidesWrapper.style.overflow = 'hidden';
	slides.forEach(slide => {
		slide.style.width = width;
	});

	slider.style.position = 'relative';
	const indicators = this.document.createElement('ol');

	indicators.classList.add('carousel-indicators');
	slider.append(indicators);

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('li');
		dot.setAttribute('data-slide-to', i + 1);
		dot.classList.add('dot');
		indicators.append(dot);
		dots.push(dot);
		if (i == 0) {
			dot.style.opacity = 1;
		}
	}


	function deleteNotDigits(str) {
		return +str.replace(/\D/g, '');
	}

	next.addEventListener('click', () => {

		if (offset == deleteNotDigits(width) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += deleteNotDigits(width);
		}

		slidesField.style.transform = `translatex(-${offset}px)`;

		if (slideIndex == slides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}

		if (slides.length < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = `${slideIndex}`;
		}

		dots.forEach(dots => dots.style.opacity = 0.5);
		dots[slideIndex - 1].style.opacity = 1;


	});

	prev.addEventListener('click', () => {

		if (offset == 0) {
			offset = deleteNotDigits(width) * (slides.length - 1);
		} else {
			offset -= deleteNotDigits(width);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == 1) {
			slideIndex = slides.length;
		} else {
			slideIndex--;
		}

		if (slides.length < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = slideIndex;
		}

		dots.forEach(dots => dots.style.opacity = 0.5);
		dots[slideIndex - 1].style.opacity = 1;
	});

	dots.forEach(dot => {
		dot.addEventListener('click', (e) => {
			const slideTo = e.target.getAttribute('data-slide-to');
			slideIndex = slideTo;
			offset = deleteNotDigits(width) * (slideTo - 1);
			slidesField.style.transform = `translateX(-${offset}px)`;
			if (slides.length < 10) {
				current.textContent = `0${slideIndex}`;
			} else {
				current.textContent = slideIndex;
			}
			dots.forEach(dots => dots.style.opacity = 0.5);
			dots[slideIndex - 1].style.opacity = 1;

		});
	});

	// showSlides(slideIndex);
	// if (slides.length < 10) {
	// 	total.textContent = `0${slides.length}`
	// } else {
	// 	total.textContent = `${slides.length}`
	// }

	// function showSlides(n) {

	// 	if (n > slides.length) {
	// 		slideIndex = 1;
	// 	};

	// 	if (n < 1) {
	// 		slideIndex = slides.length;
	// 	};

	// 	slides.forEach(item => item.style.display = 'none');

	// 	slides[slideIndex - 1].style.display = 'block';

	// 	if(slides.length<10){
	// 		current.textContent=`0${slideIndex}`
	// 	}else{
	// 		current.textContent=`${slideIndex}`
	// 	}
	// };

	// function plusSlides(n) {
	// 	showSlides(slideIndex += n)
	// };

	// prev.addEventListener('click', () => {
	// 	plusSlides(-1);
	// });
	// next.addEventListener('click', () => {
	// 	plusSlides(1);
	// });
}

module.exports = slider;