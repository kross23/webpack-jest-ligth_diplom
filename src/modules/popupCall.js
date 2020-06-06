const popupCall = () => {
	const abtn = document.querySelectorAll('a.call-btn'); //a.call-btn'
	const popupCall = document.querySelector('.popup-call');

	const step = () => {
		let nt = popupCall.style.opacity;
		nt = parseFloat(nt);
		nt += 0.08;
		popupCall.style.opacity = `${nt}`;
		if (nt < 1) {
			requestAnimationFrame(step);
		}
	};
	abtn.forEach(elem => {
		elem.addEventListener('click', () => {

			popupCall.style.display = 'block';
			if (document.body.clientWidth > 768) {
				popupCall.style.opacity = `0`;
				requestAnimationFrame(step);
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
};
export default popupCall;
