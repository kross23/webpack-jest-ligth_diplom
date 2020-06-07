const bayn = () => {
	const accordionTwo = document.querySelector('#accordion-two'),
		panelHeading = accordionTwo.querySelectorAll('.panel-heading'),
		panelCollapse = accordionTwo.querySelectorAll('.panel-collapse');
	panelCollapse[0].classList.remove('in');

	const toglgleTabs = index => {
		for (let i = 0; i < panelCollapse.length; i++) {
			if (i === index) {
				panelCollapse[i].classList.add('in');
			} else {
				panelCollapse[i].classList.remove('in');
			}
		}

	};
	accordionTwo.addEventListener('click', event => {
		event.preventDefault();
		const target = event.target;
		const btn = target.closest('.panel-heading');

		if (btn !== null) {
			panelHeading.forEach((elem, index) => {
				if (elem === btn) {
					toglgleTabs(index);
				}
			});
		}
	});
};
export default bayn;
