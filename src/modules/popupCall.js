const popupCall = () => {
	const abtn = document.querySelectorAll('a.call-btn'); //a.call-btn'1
	const popupCall = document.querySelectorAll('.popup'),
		chekbutton = document.querySelector('.gauging-button'),
		consultationBtn = document.querySelector('.consultation-btn'),
		inputphone = document.querySelectorAll('.phone-user'),
		inputname = document.querySelectorAll('input[name="user_name"]');
	const arrBtnPopup = [];
	arrBtnPopup.push(abtn[0]);
	arrBtnPopup.push(abtn[1]);
	arrBtnPopup.push(chekbutton);
	arrBtnPopup.push(consultationBtn);
	const arrPopup = [];
	arrPopup.push(popupCall[0]);
	arrPopup.push(popupCall[1]);
	arrPopup.push(popupCall[2]);
	arrPopup.push(popupCall[3]);


	arrBtnPopup.forEach((elem, index) => {
		elem.addEventListener('click', event => {
			const target = event.target;
			if (target === elem) {
				arrPopup[index].style.opacity = `0`;
				arrPopup[index].classList.add('active');
				arrPopup[index].classList.add('transition');
				arrPopup[index].style.opacity = `1`;
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