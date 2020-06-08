const constructor = () => {
	const consTructor = document.querySelector('#accordion'),
		panel = consTructor.querySelectorAll('.panel-heading'),
		ntbb = consTructor.querySelectorAll('.construct-btn'),
		panelCollapse = consTructor.querySelectorAll('.panel-collapse'),
		popupDiscount = document.querySelector('.popup-discount');

	const collapseTwoid = document.querySelector('#collapseTwo'),
		blockCollapse = collapseTwoid.querySelectorAll('.title-text'),
		seleckColl = collapseTwoid.querySelectorAll('.select-box'),
		select = collapseTwoid.querySelectorAll('select'),
		calcResult = document.querySelector('#calc-result');
	calcResult.value = '';
	let typeSept = true,
		typeSeptTwo = true,
		sum = 0;

	//........................................................
	panelCollapse[0].classList.remove('in');

	const calck = () => {
		// console.log('sum = : ', sum); // стартовая сумма
		// console.log(typeSept); // первый чек
		// console.log(typeSeptTwo); // второй чек

		if (typeSept) {
			sum = 10000;
			select.forEach((elem, index) => {
				if (index === 0 && 2 === parseFloat(elem.value)) {
					console.log('sum: ', sum);
					sum = ((sum / 100) * 20) + sum;
					sum = Math.floor(sum);
					console.log('sum: ', sum);
				}
				if (index === 1 && 2 === parseFloat(elem.value)) {
					sum = ((sum / 100) * 30) + sum;
				} else if (index === 1 && 3 === parseFloat(elem.value)) {
					sum = ((sum / 100) * 50) + sum;
				}

			});
			if (typeSeptTwo) {
				sum += 1000;
			}
		} else {
			sum = 15000;
			select.forEach((elem, index) => {
				if (index === 0 && 2 === parseFloat(elem.value)) {
					console.log('sum: ', sum);
					sum = ((sum / 100) * 20) + sum;
					sum = Math.floor(sum);
					console.log('sum: ', sum);
				}
				if (index === 1 && 2 === parseFloat(elem.value)) {
					sum = ((sum / 100) * 30) + sum;
				} else if (index === 1 && 3 === parseFloat(elem.value)) {
					sum = ((sum / 100) * 50) + sum;
				}
				if (index === 2 && 2 === parseFloat(elem.value)) {
					console.log('sum: ', sum);
					sum = ((sum / 100) * 20) + sum;
					sum = Math.floor(sum);
					console.log('sum: ', sum);
				}
				if (index === 3 && 2 === parseFloat(elem.value)) {
					sum = ((sum / 100) * 30) + sum;
				} else if (index === 3 && 3 === parseFloat(elem.value)) {
					sum = ((sum / 100) * 50) + sum;
				}
			});
			if (typeSeptTwo) {
				sum += 2000;
			}
		}
		calcResult.value = sum; // итоговая сумма
	};

	const blocNon = () => { // невидно
		seleckColl[2].classList.remove('select-box');
		seleckColl[3].classList.remove('select-box');
		seleckColl[2].classList.add('collapse');
		seleckColl[3].classList.add('collapse');
		blockCollapse[1].classList.add('collapse');

	};
	const blocIn = () => { //видно
		seleckColl[2].classList.add('select-box');
		seleckColl[3].classList.add('select-box');
		seleckColl[2].classList.remove('collapse');
		seleckColl[3].classList.remove('collapse');
		blockCollapse[1].classList.remove('collapse');
	};

	const toglgleTabs = index => {
		for (let i = 0; i < panelCollapse.length; i++) {
			if (i === index) {
				panelCollapse[i].classList.add('in');
			} else {
				panelCollapse[i].classList.remove('in');
			}
		}
	};
	blocNon();
	consTructor.addEventListener('click', event => {
		const target = event.target;
		if (!target.closest('.onoffswitch')) {
			event.preventDefault();
		}
		const get = target.closest('.panel-heading'); // панель верняя
		const btn = target.closest('.construct-btn'); // ктопка
		const check = target.closest('#myonoffswitch');
		const checkTwo = target.closest('#myonoffswitch-two'); // колодцы
		const callBtn = target.closest('.call-btn');

		//class="button construct-btn"
		if (get !== null) { //
			panel.forEach((elem, index) => {
				if (elem === get) {
					toglgleTabs(index);
				}
			});
		}
		if (btn !== null) {
			calck();
			ntbb.forEach((elem, index) => {
				if (elem === btn) {
					if (index !== panelCollapse.length - 1) {
						panelCollapse[index + 1].classList.add('in');
						panelCollapse[index].classList.remove('in');
					}
				}
			});
		}

		if (check !== null) {
			if (check.checked) {
				console.log('check.checked: ', check.checked);
				typeSept = true;
				blocNon();
			} else {
				console.log('check.checked: ', check.checked);
				typeSept = false;
				blocIn();
			}
		}

		if (checkTwo !== null) {
			if (checkTwo.checked) {
				typeSeptTwo = true;

			} else {
				typeSeptTwo = false;

			}
		}
		if (callBtn !== null) {
			setTimeout(popupDiscount.classList.add('active'), 3000);
		}
	});
	popupDiscount.addEventListener('click', event => {
		let target = event.target;
		if (target.classList.contains('popup-close')) {
			popupDiscount.classList.remove('active');
		} else {
			target = target.closest('.popup-content');
		}
		if (!target) {
			popupDiscount.classList.remove('active');
		}
	});
};
export default constructor;