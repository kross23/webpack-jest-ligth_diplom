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
	const  allInput = document.querySelectorAll('input[class="phone-user"]').forEach(el => el.value = ''),
			 alInput = document.querySelectorAll('input[name = "user_name"]').forEach(el => el.value = ''),
			 Input = document.querySelectorAll('input[name="user_quest"]').forEach(el => el.value = '');
		const pop = document.querySelectorAll('.popup');
		pop.forEach(elem => {
			if (elem.classList.contains('active')) {
				elem.classList.remove('active');
			}
		});
		statusMesage.textContent = empty;
	};
	forms.forEach((item, index) => {
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
				userQuest.quest = users.value;
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