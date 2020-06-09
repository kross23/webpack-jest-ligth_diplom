const popupCall = () => {
	const abtn = document.querySelectorAll('a.call-btn'); //a.call-btn'1
	const popupCall = document.querySelector('.popup-call'),
		chekbutton = document.querySelector('.gauging-button'),
		consultationBtn = document.querySelector('.consultation-btn');
	const popupConsultation = document.querySelector('.popup-consultation');
	const popupCheck = document.querySelector('.popup-check'); //окно

	const arrBtnPopup = [];
	arrBtnPopup.push(abtn[0]);
	arrBtnPopup.push(abtn[1]);
	arrBtnPopup.push(chekbutton);
	arrBtnPopup.push(consultationBtn);
	const arrPopup = [];
	arrPopup.push(popupCall);
	arrPopup.push(popupCall);
	arrPopup.push(popupCheck);
	arrPopup.push(popupConsultation);

	const step = (arrpop) => {
		let opacity = arrpop.style.opacity;
		opacity = parseFloat(opacity);
		opacity += 0.08;
		arrpop.style.opacity = `${opacity}`;
		if (opacity < 1) {
			requestAnimationFrame(step(arrpop));
		}
	};

	arrBtnPopup.forEach((elem, index) => {
		elem.addEventListener('click', event => {
			const target = event.target;
			if (target === elem) {
				arrPopup[index].style.opacity = `0`;
				arrPopup[index].classList.add('active');
				arrPopup[index].classList.add('transition');
				if (document.body.clientWidth > 768) {
					
					arrPopup[index].style.opacity = `1`;
					
				} else {
					arrPopup[index].style.opacity = `1`;
				}
			}
		});
	});
	arrPopup.forEach(elem => {
		elem.addEventListener('click', event => {
			let target = event.target;
			if (target.classList.contains('popup-close')) {
				elem.classList.remove('active');
			} else {
				target = target.closest('.popup-content');
			}
			if (!target) {
				elem.classList.remove('active');
			}
		});
	});

};
export default popupCall;