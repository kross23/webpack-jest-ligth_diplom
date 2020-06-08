const sendForm = () => {
	const errorMesage = 'что то пошло не так ',
		loadMesage = 'загрузка....',
		succsesMesage = 'мы скоро с вами свяжемся!',
		empty = '',
		users = document.querySelector('input[name="user_quest"]');
	const userQuest = {
		quest: '',
	};

	const dataSept = {
		septicType: 0,
		firstWell: {
			diameter: '',
			rings: '',
		},
		secondWellDrainage: {
			diameter: '',
			rings: '',
		},
		underside: false, //днище
		distanc: 0,
		summa: 0,
	};
	const statusMesage = document.createElement('div');
	statusMesage.style.cssText = `font-size:2rem; color: #85be32;`;
	const forms = document.querySelectorAll('form');

	const postData = body => fetch('./server.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body),
	});

	const clear = () => {
		// eslint-disable-next-line no-unused-vars
		const allInput = document.querySelectorAll('input').forEach(el => el.value = '');
		const pop = document.querySelector('.popup');
		if (pop.style.display !== 'none') {
			pop.style.display = 'none';
		}
		statusMesage.textContent = empty;
	};

	forms.forEach((item, index) => {
		item.addEventListener('input', event => {
			const phone = item.querySelector('input[name = "user_phone"]'),
				message = item.querySelector('input[name = "user_message"]'),
				name = item.querySelector('input[name = "user_name"]'),
				userq = item.querySelector('input[name="user_quest"]');

			if (event.target === name) {
				name.value = name.value.replace(/([^А-Яа-яЁё])*/g, '');
			}
			if (event.target === phone) {
				phone.value = phone.value.replace(/([^0-9])*/g, '');

			}

			if (event.target === message) {
				message.value = message.value.replace(/([^А-Яа-яЁё.,\-'"!\s])*/g, '');
			}
			if (event.target === userq) {
				userq.value = userq.value.replace(/([^А-Яа-яЁё.,\-'"!\s])*/g, '');

			}
			userQuest.quest = userq.value;

		});


		item.addEventListener('submit', event => {
			event.preventDefault();
			if (index !== 2 && index !== 4 && index !== 6) {
				statusMesage.textContent = loadMesage;
				item.appendChild(statusMesage);
				const formData = new FormData(item);
				const body = {};
				formData.forEach((val, key) => body[key] = val);
				postData(body)
					.then(response => {
						if (response.status !== 200) {
							throw new Error('status network not 200.');
						} else {
							statusMesage.textContent = succsesMesage;
						}
					})
					.then(setTimeout(clear, 4500))
					.catch(error => {
						statusMesage.textContent = errorMesage;
						console.error(error);
					});
			} else if (index === 4) {
				const myonoffswitch = document.querySelector('#myonoffswitch'),
					myonoffswitchTwo = document.querySelector('#myonoffswitch-two'),
					accordion = document.querySelector('#collapseTwo'),
					collapseFour = document.querySelector('#collapseFour'),
					input = collapseFour.querySelector('input'),
					calcResult = document.querySelector('#calc-result'),
					select = accordion.querySelectorAll('.form-control');

				if (myonoffswitch.checked) {
					dataSept.septicType = 1;
					dataSept.firstWell.diameter = select[0].value;
					dataSept.firstWell.rings = select[1].value;
					dataSept.underside = myonoffswitchTwo.checked; //днище
					dataSept.distanc = input.value,
					dataSept.summa = calcResult.value;

				} else {
					dataSept.septicType = 2;
					dataSept.septicType = 1;
					dataSept.firstWell.diameter = select[0].value;
					dataSept.firstWell.rings = select[1].value;
					dataSept.secondWellDrainage.diameter = select[2].value;
					dataSept.secondWellDrainage.rings = select[3].value;
					dataSept.underside = myonoffswitchTwo.checked; //днище
					dataSept.distanc = input.value,
					dataSept.summa = calcResult.value;
				}


				statusMesage.textContent = loadMesage;
				item.appendChild(statusMesage);
				const formData = new FormData(item);
				const body = {};
				formData.forEach((val, key) => body[key] = val);
				body.calcdata = dataSept;
				console.log(body);
				postData(body)
					.then(response => {
						if (response.status !== 200) {
							throw new Error('status network not 200.');
						} else {
							statusMesage.textContent = succsesMesage;
						}
					})
					.then(setTimeout(clear, 4500))
					.catch(error => {
						statusMesage.textContent = errorMesage;
						console.error(error);
					});




			} else if (index === 6) {

				statusMesage.textContent = loadMesage;
				item.appendChild(statusMesage);
				const formData = new FormData(item);
				const body = {};
				formData.forEach((val, key) => body[key] = val);
				console.log('userQuest: ', userQuest);
				body.qwest = userQuest;
				console.log('body: ', body);
				postData(body)
					.then(response => {
						if (response.status !== 200) {
							throw new Error('status network not 200.');
						} else {
							statusMesage.textContent = succsesMesage;
						}
					})
					.then(setTimeout(clear, 4500))
					.catch(error => {
						statusMesage.textContent = errorMesage;
						console.error(error);
					});
			}


		});
	});

};
export default sendForm;