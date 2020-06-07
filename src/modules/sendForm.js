const sendForm = () => {
	const errorMesage = 'что то пошло не так ',
		loadMesage = 'загрузка....',
		succsesMesage = 'мы скоро с вами свяжемся!',
		empty = '';

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

	forms.forEach(item => {
		item.addEventListener('input', event => {
			const phone = item.querySelector('input[name = "user_phone"]'),
				message = item.querySelector('input[name = "user_message"]'),
				name = item.querySelector('input[name = "user_name"]'),
				formBtn = item.querySelector('.capture-form-btn');

			if (event.target === name) {
				name.value = name.value.replace(/([^А-Яа-яЁё])*/g, '');
			}
			if (event.target === phone) {
				phone.value = phone.value.replace(/([^0-9])*/g, '');

			}

			if (event.target === message) {
				message.value = message.value.replace(/([^А-Яа-яЁё.,\-'"!\s])*/g, '');
			}
		});
		item.addEventListener('submit', event => {
			event.preventDefault();
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
		});
	});

};
export default sendForm;
