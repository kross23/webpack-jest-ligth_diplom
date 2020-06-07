const popupCall = () => {
	const abtn = document.querySelectorAll('a.call-btn'); //a.call-btn'
	const popupCall = document.querySelector('.popup-call');

	const step = () => {
		let opacity = popupCall.style.opacity;
		opacity = parseFloat(opacity);
		opacity += 0.08;
		popupCall.style.opacity = `${opacity}`;
		if (opacity < 1) {
			requestAnimationFrame(step);
		}
	};
	abtn.forEach(elem => {
		elem.addEventListener('click', () => {

			popupCall.style.display = 'block';
			if (document.body.clientWidth > 768) {
				popupCall.style.opacity = `0`;
				step();
			} else {
				popupCall.style.opacity = `1`;
			}

		});

	});

	popupCall.addEventListener('click', event => {
		let target = event.target;
		if (target.classList.contains('popup-close')) {
			popupCall.style.display = 'none';
		} else {
			target = target.closest('.popup-content');
		}
		if (!target) {
			popupCall.style.display = 'none';
		}
	});

	const checkList = () => {
		const chekbutton = document.querySelector('.gauging-button'),
			popupCheck = document.querySelector('.popup-check');

		chekbutton.addEventListener('click', () => {

			popupCheck.classList.add('active');

		});


		popupCheck.addEventListener('click', event => {
			let target = event.target;
			if (target.classList.contains('popup-close')) {
				popupCheck.classList.remove('active');
			} else {
				target = target.closest('.popup-content');
			}
			if (!target) {
				popupCheck.classList.remove('active');
			}
		});
	};

	checkList();


};
export default popupCall;
