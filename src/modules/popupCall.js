const popupCall = () => {
	const nameUserquest = document.querySelector('input[name="user_quest"]'); //вопрос пользователя
	const abtn = document.querySelectorAll('a.call-btn'); //a.call-btn'1
	const popupCall = document.querySelector('.popup-call'),
	chekbutton = document.querySelector('.gauging-button'),
	consultationBtn = document.querySelector('.consultation-btn');
	const popupConsultation = document.querySelector('.popup-consultation');
	const	popupCheck = document.querySelector('.popup-check'); //окно

	let arrBtnPopup = [];
	arrBtnPopup.push(abtn[0]);
	arrBtnPopup.push(abtn[1]);
	arrBtnPopup.push(chekbutton);
	arrBtnPopup.push(consultationBtn);
	let arrPopup = [];
	arrPopup.push(popupCall);
	arrPopup.push(popupCall);
	arrPopup.push(popupCheck);
	arrPopup.push(popupConsultation);
	const step = popup => {
		let opacity = popup.style.opacity;
		opacity = parseFloat(opacity);
		opacity += 0.08;
		popup.style.opacity = `${opacity}`;
		if (opacity < 1) {
			requestAnimationFrame(step(popup));
		}
	};
	arrBtnPopup.forEach((elem, index) => {
		elem.addEventListener('click', event => {
			const target = event.target;
			if (target === elem){
				arrPopup[index].classList.add('active');
				// if (document.body.clientWidth > 768) {
				// 	arrPopup[index].style.opacity = `0`;
				// 	step(arrPopup[index]);
				// } else {
				// 	arrPopup[index].style.opacity = `1`;
				// }
			}
		});
	});
	arrPopup.forEach((elem)=>{
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

		nameUserquest.addEventListener('input', event => {
			const target = event.target;
			if (target === nameUserquest) {
				target.value = target.value.replace(/([^А-Яа-яЁё])*/g, '');
			}
		});
};
export default popupCall;
