const constructor = () => {
	const consTructor = document.querySelector('#accordion'),
		panel = consTructor.querySelectorAll('.panel-heading'),
		ntbb = consTructor.querySelectorAll('.construct-btn'),
		panelCollapse = consTructor.querySelectorAll('.panel-collapse');
	    panelCollapse[0].classList.remove('in');
	console.log('ntbb: ', ntbb);
	const toglgleTabs = index => {
		for (let i = 0; i < panelCollapse.length; i++) {
			if (i === index) {
				panelCollapse[i].classList.toggle('in');
			}
		}
	};

	consTructor.addEventListener('click', event => {
		event.preventDefault();
		const target = event.target;

		const get = target.closest('.panel-heading');
		const btn = target.closest('.construct-btn');

		if (get !== null) { //
			panel.forEach((elem, index) => {
				if (elem === get) {
					toglgleTabs(index);
				}
			});
		}
		if (btn !== null) {
			ntbb.forEach((elem, index) => {
				if (elem === btn) {
					if (index !== panelCollapse.length - 1) {
						panelCollapse[index + 1].classList.add('in');
						panelCollapse[index].classList.remove('in');
					}

				}
			});
		}


		//construct-btn

	});
};
export default constructor;
/*
panel-body
id="collapseOne"
id="collapseTwo"
id="collapseThree"
id="collapseFour"

*/
