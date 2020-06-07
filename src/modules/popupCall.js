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
	const popupConsultation = () => {
		const consultationBtn = document.querySelector('.consultation-btn'),
			popupConsultation = document.querySelector('.popup-consultation'),
			nameUserquest = document.querySelector('input[name="user_quest"]');

		nameUserquest.addEventListener('input', event => {
			const target = event.target;
			if (target === nameUserquest) {
				target.value = target.value.replace(/([^А-Яа-яЁё])*/g, '');
			}
		});


		consultationBtn.addEventListener('click', event => {
			const target = event.target;
			popupConsultation.classList.add('active');
		});
		popupConsultation.addEventListener('click', event => {
			let target = event.target;
			if (target.classList.contains('popup-close')) {
				popupConsultation.classList.remove('active');
			} else {
				target = target.closest('.popup-content');
			}
			if (!target) {
				popupConsultation.classList.remove('active');
			}
		});

	};
	popupConsultation();
};
export default popupCall;
