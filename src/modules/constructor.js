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

	let typeSept = true,
		typeSeptTwo = true,
		sum = 0;
	const check1 = document.querySelector('#myonoffswitch');
	const check2 = document.querySelector('#myonoffswitch-two');

	const arrDefaultget  = [
		check1.checked,
		check2.checked,
		select[0].value,
		select[1].value,
		select[2].value,
		select[3].value
	];
	const arrGet = () => {
		let check_uno = document.querySelector('#myonoffswitch');
		let check_duo = document.querySelector('#myonoffswitch-two');
		let selectio = document.querySelectorAll('select');
		 const fourcollaps = document.querySelector('#collapseFour');
		let inputLength = fourcollaps.querySelector('input');
		check_uno = arrDefaultget[0];
		check_duo = arrDefaultget[1];
		selectio[0].value = arrDefaultget[2];
		selectio[1].value = arrDefaultget[3];
		selectio[2].value = arrDefaultget[4];
		selectio[3].value = arrDefaultget[5];
		calcResult.value = '';
		inputLength.value = '';
	};





	//........................................................
	panelCollapse[0].classList.remove('in');

	const calck = () => {
		if (typeSept) {
			sum = 10000;
			if (parseFloat(select[0].value) === 2) {
				sum = ((sum / 100) * 20) + sum;
				sum = Math.floor(sum);
			}
			if (parseFloat(select[1].value) === 2) {
				sum = ((sum / 100) * 30) + sum;
			} else if (parseFloat(select[1].value) === 3) {
				sum = ((sum / 100) * 50) + sum;
			}


			if (typeSeptTwo) {
				sum += 1000;
			}
		} else {
			sum = 15000;
			if (parseFloat(select[0].value) === 2) {
				sum = ((sum / 100) * 20) + sum;
				sum = Math.floor(sum);
			}
			if (parseFloat(select[1].value) === 2) {
				sum = ((sum / 100) * 30) + sum;
			} else if (parseFloat(select[1].value) === 3) {
				sum = ((sum / 100) * 50) + sum;
			}
			if (parseFloat(select[2].value) === 2) {
				sum = ((sum / 100) * 20) + sum;
				sum = Math.floor(sum);
			}
			if (parseFloat(select[3].value) === 2) {
				sum = ((sum / 100) * 30) + sum;
			} else if (parseFloat(select[3].value) === 3) {
				sum = ((sum / 100) * 50) + sum;
			}

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
		const checkTwo = target.closest('#myonoffswitch-two');
		const callBtn = target.closest('.call-btn');
		const select = target.closest('.form-control');

		//class="button construct-btn"
		if (select !== null) {
			calck();
		}
		if (check !== null) {
			if (check.checked) {
				typeSept = true;
				blocNon();
				calck();
			} else {
				typeSept = false;
				blocIn();
				calck();
			}

		}

		if (get !== null) { //

			calck();
			panel.forEach((elem, index) => {
				if (elem === get) {
					toglgleTabs(index);
				}
			});
		}
		if (btn !== null) {
			if (check1.checked) {
				typeSept = true;
				blocNon();
				calck();
			} else {
				typeSept = false;
				blocIn();
				calck();
			}
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
		if (checkTwo !== null) {

			if (checkTwo.checked) {
				typeSeptTwo = true;
				calck();
			} else {
				typeSeptTwo = false;
				calck();
			}
		}

		if (callBtn !== null) {
			setTimeout(popupDiscount.classList.add('active'), 3000);
			arrGet();
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
