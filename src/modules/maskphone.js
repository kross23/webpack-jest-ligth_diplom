const maskphone = () => {
	const phoneInput = document.querySelectorAll('.phone-user'),
		nameUser = document.querySelectorAll('input[name="user_name"]'), //'.user_name'
		qwestion = document.querySelector('input[name="user_quest"]');

	function mask(event) {
		event.keyCode && (keyCode = event.keyCode);
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
		if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
		if (event.type === "blur" && this.value.length < 5) this.value = "";
	}
	phoneInput.forEach(item => {
		item.addEventListener("input", mask, false);
	});

	nameUser.forEach(item => {

		item.addEventListener('input', event => {

			item.value = item.value.replace(/([^А-Яа-яЁё])*/g, '');

		});
	});

	qwestion.addEventListener('input', event => {
		const target = event.target;
		target.value = target.value.replace(/([^А-Яа-яЁё.,\-'"!\s])*/g, '');
	});


};

export default maskphone;
// name.value = name.value.replace(/([^А-Яа-яЁё])*/g, '');
// }
// if (event.target === userq) {
//     userq.value = userq.value.replace(/([^А-Яа-яЁё.,\-'"!\s])*/g, '');