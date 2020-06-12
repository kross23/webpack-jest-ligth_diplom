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
	const allinput = document.querySelectorAll('input');
	const FormBtn = document.querySelectorAll('button[name="submit"]');
	FormBtn.forEach(elem => {
		elem.setAttribute('disabled', true);
	});
	allinput.forEach(el => {
		if (el.hasAttribute('required')) {
			el.removeAttribute('required'); // удаляем встроеную проверку в html
		}
	});

	const postData = body => fetch('./server.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body),
	});
	const clear = () => {
		// eslint-disable-next-line no-unused-vars
		const allInput = document.querySelectorAll('input[class="phone-user"]').forEach(el => el.value = ''),
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

	function mask(event) {

		event.keyCode && (KeyboardEvent.code = event.keyCode); ///KeyboardEvent.cod
		const pos = this.selectionStart;
		if (pos < 3) event.preventDefault();
		let matrix = "+7 (___) ___ ____",
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, ""),
			new_value = matrix.replace(/[_\d]/g, a => (i < val.length ? val.charAt(i++) || def.charAt(i) : a));
		i = new_value.indexOf("_");
		if (i !== -1) {
			i < 5 && (i = 3);
			new_value = new_value.slice(0, i);
		}
		let reg = matrix.substr(0, this.value.length).replace(/_+/g,
			a => "\\d{1," + a.length + "}").replace(/[+()]/g, "\\$&");
		reg = new RegExp("^" + reg + "$");
		if (!reg.test(this.value) || this.value.length < 5 || KeyboardEvent.code > 47 && KeyboardEvent.code < 58) this.value = new_value;
		if (event.type === "blur" && this.value.length < 5) this.value = "";
	}



	forms.forEach((item, index) => { // перечисление всех ворм 

		const Btn = item.querySelector('button[name="submit"]');


		// Btn.removeAttribute('disabled');

		// Btn.setAttribute('disabled', true);


		item.addEventListener('input', event => {
			const formBtn = item.querySelector('button[name="submit"]');

			const phoneInput = item.querySelector('input[name="user_phone"]'); //поле имя
			const nameUser = item.querySelector('input[name="user_name"]'); //поле телефона
			const userQuest = item.querySelector('input[name="user_quest"]'); //вопрос от пользователя
			const inputs = [];
			let count = 0;
			if (phoneInput !== null) {
				inputs.push(phoneInput);
			}
			if (nameUser !== null) {
				inputs.push(nameUser);
			}
			if (userQuest !== null) {
				inputs.push(userQuest);
			}


			const bound = mask.bind(phoneInput); //бинд проверки на номер
			if (event.target === phoneInput) {
				bound(event);
			}
			if (event.target === nameUser) {
				nameUser.value = nameUser.value.replace(/([^А-Яа-яЁё.,\-'"!\s])*/g, '');
			}
			inputs.forEach((input) => {
				if (input.value !== '') {
					count++;
				}
			});
			if (count === inputs.length) {
				formBtn.removeAttribute('disabled');
			} else {
				formBtn.setAttribute('disabled', true);
			}
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
				body.qwest = userQuest;
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
			Btn.setAttribute('disabled', true);
		});
	});

};
export default sendForm;